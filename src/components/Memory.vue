<template>
  <div>
    <div class="row">
      <div class="col-md-6" v-for="form in forms" :key="form">
        <ve-line :data="form" :colors="colors"></ve-line>
      </div>
    </div>
  </div>
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
      let day = dayjs().subtract(1, 'minute')
      let rows = []

      for (let i = 0; i < 30; i++) {
        let addDay = day.add(1, 'second')
        let time = addDay.format('mm:ss')
        rows.push({time, 'EdenUsed': 0})
        day = addDay
      }

      return {
        colors: ['#c23531'],
        id: null,
        timer: null,
        name2Form: {},
        forms: [],
      }
    },
    methods: {
      async getMemory() {
        let result = await axios.get(`/api/jvms/${this.id}/memory`)

        let time = dayjs().format('mm:ss')

        _.each(result.data, i => {
          if (_.isEmpty(this.name2Form[i.name])) {
            let day = dayjs().subtract(30, 'second')
            let rows = []

            for (let idx = 0; idx < 30; idx++) {
              let addDay = day.add(1, 'second')
              let time = addDay.format('mm:ss')
              let row = {time}
              row[i.name] = 0
              rows.push(row)
              day = addDay
            }
            this.name2Form[i.name] = {columns: ['time', i.name], rows};
            this.forms.push(this.name2Form[i.name])
          }

          this.name2Form[i.name].rows.shift()
          let row = {time}
          row[i.name] = i.used
          this.name2Form[i.name].rows.push(row)
        })
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
