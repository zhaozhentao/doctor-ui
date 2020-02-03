<template>
  <el-row class="main">
    <p class="head">内存</p>

    <van-skeleton class="van-skeleton" title :row="8" v-if="loading"/>

    <div v-if="!loading">
      <el-row type="flex" justify="end">
        <el-button v-on:click="gc">GC</el-button>
      </el-row>

      <div class="row">
        <div class="col-md-6" v-for="form in forms" :key="form.columns[1]">
          <ve-line :data="form" :colors="colors" :series="form.series"/>
        </div>
      </div>
    </div>
  </el-row>
</template>

<script>
  import _ from 'lodash'
  import VeLine from 'v-charts/lib/line.common'
  import dayjs from 'dayjs'

  let axios = require('axios');

  export default {
    components: {VeLine},
    name: 'Memory',
    data() {
      return {
        loading: true,
        colors: ['#304ffe', '#b71c1c'],
        id: null,
        timer: null,
        name2Form: {},
        forms: [],
      }
    },
    methods: {
      async getMemory() {
        let result = await axios.get(`/api/jvms/${this.id}/memory`)

        this.loading = false

        let time = dayjs().format('mm:ss')

        _.each(result.data, i => {
          if (_.isEmpty(this.name2Form[i.name])) {
            let day = dayjs().subtract(30, 'second')

            this.name2Form[i.name] = {
              columns: ['time', i.name, 'max'],
              rows: [],
              series: [{
                symbol: "none",
                type: "line",
                smooth: false,
                name: i.name,
                data: []
              }, {
                symbol: "none",
                type: "line",
                smooth: false,
                name: 'max',
                data: []
              }]
            };
            let form = this.name2Form[i.name]

            for (let idx = 0; idx < 30; idx++) {
              let addDay = day.add(1, 'second')

              form.rows.push({time: addDay.format('mm:ss')})
              form.series[0].data.push(0)
              form.series[1].data.push(0)

              day = addDay
            }
            this.forms.push(this.name2Form[i.name])
          }

          let form = this.name2Form[i.name]
          form.rows.shift()
          form.series[0].data.shift()
          form.series[0].data.push(i.used / 1000 / 1000)
          form.series[1].data.shift()
          form.series[1].data.push(i.max / 1000 / 1000)
          let row = {time}
          form.rows.push(row)
        })
      },
      async gc() {
        await axios.post(`/api/jvms/${this.id}/gc`)
      }
    },
    created() {
      this.id = this.$route.params.id

      this.timer = setInterval(() => {
        this.getMemory()
      }, 1000)
    },
    destroyed() {
      clearInterval(this.timer)
    }
  }
</script>

<style scoped>
</style>
