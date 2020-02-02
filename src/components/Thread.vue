<template>
  <div>
    <van-skeleton class="van-skeleton" title :row="8" v-if="loading"/>
    <ve-line :data="form" :colors="colors" v-if="!loading"/>
  </div>
</template>

<script>
  import _ from 'lodash'
  import dayjs from 'dayjs'
  import VeLine from "v-charts/lib/line.common";

  let axios = require('axios');

  export default {
    name: 'Thread',
    components: {VeLine},
    data() {
      return {
        loading: true,
        id: null,
        timer: null,
        colors: ['#304ffe', '#b71c1c'],
        form: {columns: ['time', '活动线程', '峰值线程'], rows: []}
      }
    },
    methods: {
      async getThreadsSummary() {
        let result = await axios.get(`/api/jvms/${this.id}/threads_summary`)

        this.loading = false

        if (_.size(this.form.rows) >= 30) {
          this.form.rows.shift()
        }

        this.form.rows.push({
          time: dayjs().format('mm:ss'),
          '活动线程': result.data.activeThreadCount,
          '峰值线程': result.data.peakThreadCount
        })
      }
    },
    created() {
      this.id = this.$route.params.id

      this.timer = setInterval(() => {
        this.getThreadsSummary();
      }, 1000)
    },
    destroyed() {
      clearInterval(this.timer)
    }
  }
</script>

<style scoped>
</style>
