<template>
  <div class="container-fluid">
    <p class="head">线程</p>

    <div class="row">
      <van-skeleton class="van-skeleton" title :row="8" v-if="loading"/>
      <ve-line :data="form" :colors="colors" :series="series" v-if="!loading"/>
    </div>

    <div class="row" style="margin-bottom: 14px;">
      <div class="col-md-6">
        <button class="btn btn-default" v-on:click="getThreads">
          <span class="glyphicon glyphicon-refresh" aria-hidden="true"></span>刷新
        </button>
      </div>

      <div class="col-md-6">
        <button class="btn btn-default" v-on:click="getDeadThreads">
          <span class="glyphicon glyphicon-lock" aria-hidden="true"></span>检测死锁
        </button>
      </div>
    </div>

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
            <td>
              <pre>{{ threadDetail }}</pre>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

    <el-dialog title="死锁" :visible.sync="dialogShow" width="80%">
      <div class="row">
        <div class="col-md-2">
          <el-tree :data="deadLocks" :props="defaultProps" @node-click="showDeadLock"/>
        </div>

        <div class="col-md-8">
          <pre>{{ deadLockThreadDetail }}</pre>
        </div>
      </div>
    </el-dialog>
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
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        deadLocks: null,
        dialogShow: false,
        loading: true,
        id: null,
        timer: null,
        threads: [],
        threadDetail: null,
        deadLockThreadDetail: null,
        colors: ['#304ffe', '#b71c1c'],
        form: {columns: ['time', '活动线程', '峰值线程'], rows: []},
        series: [{
          symbol: "none",
          type: "line",
          smooth: false,
          name: '活动线程',
          data: []
        }, {
          symbol: "none",
          type: "line",
          smooth: false,
          name: '峰值线程',
          data: []
        }],
      }
    },
    methods: {
      async getThreadsSummary() {
        let result = await axios.get(`/api/jvms/${this.id}/threads_summary`)

        this.loading = false

        if (_.size(this.form.rows) >= 30) {
          this.form.rows.shift()
          this.series[0].data.shift()
          this.series[1].data.shift()
        }

        this.form.rows.push({time: dayjs().format('mm:ss')})
        this.series[0].data.push(result.data.activeThreadCount)
        this.series[1].data.push(result.data.peakThreadCount)
      },
      async getThreads() {
        let result = await axios.get(`/api/jvms/${this.id}/threads`)

        this.threads = result.data
      },
      async getThreadDetail(tid) {
        let result = await axios.get(`/api/jvms/${this.id}/threads/${tid}`)
        this.threadDetail = result.data
      },
      async getDeadThreads() {
        this.deadLockThreadDetail = null

        let result = await axios.get(`/api/jvms/${this.id}/deadlock`)

        if (_.size(result.data) === 0) {
          this.$message({message: '没有死锁线程', type: 'success'});
          return
        }

        this.deadLocks = _.map(result.data, (value, index) => {
          let children = _.map(value, item => {
            return {
              label: item.name,
              threadId: item.threadId
            }
          })

          return {
            label: `死锁${index}`,
            children
          }
        })

        this.dialogShow = true
      },
      async showDeadLock(data) {
        console.log(data.threadId)
        if (!_.isNumber(data.threadId)) {
          return
        }

        let result = await axios.get(`/api/jvms/${this.id}/threads/${data.threadId}`)
        this.deadLockThreadDetail = result.data
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
