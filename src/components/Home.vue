<template>
  <el-row>
    <el-col :span="22" :offset="1">
      <van-skeleton class="van-skeleton" title :row="8" v-if="loading"/>

      <el-table :data="jvms" style="width: 100%" v-if="!loading">
        <el-table-column prop="vmid" label="PID" width="100px"/>

        <el-table-column prop="displayName" label="JVM" :show-overflow-tooltip="true">
          <template slot-scope="scope">
            <router-link :to="`/jvm/${scope.row.vmid}/vm`">{{ scope.row.displayName }}</router-link>
          </template>
        </el-table-column>
      </el-table>
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
    },
    created() {
      this.getJVM()
    }
  }
</script>
<!---->
<style scoped>

</style>
