<template>
  <el-row>
    <el-col :span="22" :offset="1">
      <el-card>
        <van-skeleton class="van-skeleton" title :row="8" v-if="loading"/>

        <el-table :data="jvms" style="width: 100%" v-if="!loading">
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
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
  let axios = require('axios');

  export default {
    name: 'Home',
    data() {
      return {
        loading: true,
        jvms: null
      }
    },
    methods: {
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
