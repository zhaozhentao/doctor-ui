<template>
  <div class="row">
    <div class="col-md-10 col-md-offset-1">
      <el-card>
        <van-skeleton class="van-skeleton" title :row="8" v-if="loading"/>

        <div v-if="!loading">
          <el-button type="text" style="margin-top: -10px;" @click="remote">远程连接</el-button>

          <el-table :data="jvms" style="width: 100%">
            <el-table-column align="center" prop="vmid" label="PID" width="100px"/>

            <el-table-column prop="displayName" label="JVM" :show-overflow-tooltip="true">
              <template slot-scope="scope">
                <router-link :to="`/jvm/${scope.row.vmid}/vm`">{{ scope.row.displayName }}</router-link>
              </template>
            </el-table-column>

            <el-table-column align="center" label="操作" width="120px">
              <template slot-scope="scope">
                <el-button type="text" v-if="scope.row.connected" v-on:click="disConnect(scope.row.vmid)">断开</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-card>
    </div>

    <el-dialog title="远程连接" width="80%" :visible.sync="showRemote">
      <el-form :model="form">
        <el-form-item label="Host">
          <el-input v-model="form.host" placeholder="host"/>
        </el-form-item>
        <el-form-item label="UserName">
          <el-input v-model="form.userName" placeholder="UserName"/>
        </el-form-item>
        <el-form-item label="Password">
          <el-input v-model="form.password" placeholder="password"/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="showRemote = false">取 消</el-button>
        <el-button type="primary" @click="connect">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  let axios = require('axios');

  export default {
    name: 'Home',
    data() {
      return {
        form: {
          host: null,
          userName: null,
          password: null,
        },
        showRemote: false,
        loading: true,
        jvms: null
      }
    },
    methods: {
      remote() {
        this.showRemote = true
      },
      async connect() {
        this.showRemote = false
        let result = await axios.post('/api/jvms', this.form)
        this.$router.replace(`/jvm/${result.data}/vm`)
      },
      async getJVM() {
        let result = await axios.get('/api/jvms').catch(error => {
          console.log(error);
        });

        this.jvms = result.data
        this.loading = false
      },
      async disConnect(vmid) {
        await axios.delete(`/api/jvms/${vmid}`)

        this.getJVM()
      },
    },
    created() {
      this.getJVM()
    }
  }
</script>
<!---->
<style scoped>

</style>
