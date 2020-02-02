<template>
  <div class="container-fluid">
    <div class="row">
      <van-skeleton class="van-skeleton" title :row="8" v-if="loading"/>
      <ve-line :data="form" :colors="colors" v-if="!loading"/>
    </div>

    <button class="btn btn-default" v-on:click="getThreads">
      <span class="glyphicon glyphicon-refresh" aria-hidden="true"></span>刷新
    </button>

    <div class="row">
      <div class="col-md-6">
        <table class="table table-hover table-bordered">
          <thead>
          <tr>
            <th>线程名</th>
            <th>状态</th>
          </tr>
          </thead>
          <tbody>
          <tr class="item" v-for="thread in threads" :key="thread.id" v-on:click="getThreadDetail(thread.id)">
            <td>{{ thread.name }}</td>
            <td>{{ thread.state }}</td>
          </tr>
          </tbody>
        </table>
      </div>

      <div class="col-md-6" style="overflow: scroll;">
        <table class="table table-hover">
          <tbody>
          <tr>
            <td><pre>{{ threadDetail }}</pre></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
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
        threads: [],
        threadDetail: null,
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
      },
      async getThreads() {
        let result = await axios.get(`/api/jvms/${this.id}/threads`)

        this.threads = result.data
      },
      async getThreadDetail(tid) {
        let result = await axios.get(`/api/jvms/${this.id}/threads/${tid}`)
        this.threadDetail = result.data
      }
    },
    created() {
      this.id = this.$route.params.id

      this.getThreads()

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
  .item:hover {
    cursor: pointer;
  }
</style>
