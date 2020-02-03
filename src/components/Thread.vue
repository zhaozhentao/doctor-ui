<template>
  <el-row class="main">
    <p class="head">线程</p>

    <el-row>
      <van-skeleton class="van-skeleton" title :row="8" v-if="loading"/>
      <ve-line :data="form" :colors="colors" :series="series" v-if="!loading"/>
    </el-row>

    <el-row>
      <el-col :span="12">
        <el-button v-on:click="getThreads" icon="el-icon-refresh">刷新</el-button>
      </el-col>

      <el-col :span="12">
        <el-button v-on:click="getDeadThreads" icon="el-icon-lock">检测死锁</el-button>
      </el-col>
    </el-row>

    <el-row style="margin-top: 20px;">
      <el-col :span="10" :offset="1">
        <el-table :data="threads" style="width: 100%" @row-click="getThreadDetail">
          <el-table-column prop="name" label="线程名"/>
          <el-table-column prop="state" sortable label="状态" width="160"/>
        </el-table>
      </el-col>

      <el-col :span="11" :offset="1" style="margin-top: 60px;">
        <pre>{{ threadDetail }}</pre>
      </el-col>
    </el-row>

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
  </el-row>
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
      async getThreadDetail(row) {
        console.log(row)
        let result = await axios.get(`/api/jvms/${this.id}/threads/${row.id}`)
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
