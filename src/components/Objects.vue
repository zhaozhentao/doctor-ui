<template>
  <el-row>
    <p class="head">堆对象统计(耗时操作)</p>

    <van-skeleton class="van-skeleton" title :row="8" v-if="loading"/>

    <div v-if="!loading">
      <el-row type="flex" align="middle">
        <el-col :span="6">
          <el-input v-model="classFilter" placeholder="ClassName"/>
        </el-col>

        <el-col :offset="10" :span="4">
          <span>总对象数:{{ totalCount }}</span>
        </el-col>

        <el-col :span="4">
          <span class="">总字节数:{{ totalBytes }}</span>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24">
          <el-table :data="afterFilterObjects" style="width: 100%">
            <el-table-column prop="className" label="ClassName"/>
            <el-table-column prop="count" sortable label="数量" width="120"/>
            <el-table-column prop="bytes" sortable label="bytes" width="120"/>
          </el-table>
        </el-col>
      </el-row>
    </div>
  </el-row>
</template>

<script>
  let axios = require('axios');

  export default {
    name: 'HeapObjects',
    data() {
      return {
        loading: true,
        classFilter: '',
        id: null,
        totalCount: null,
        totalBytes: null,
        afterFilterObjects: null,
        objects: null
      }
    },
    methods: {
      async getObjects() {
        let result = await axios.get(`/api/jvms/${this.id}/objects`)

        this.totalCount = result.data.totalCount
        this.totalBytes = result.data.totalBytes
        this.objects = result.data.beans

        this.afterFilterObjects = this.objects.filter(item => item.className.match(this.classFilter))
        this.loading = false
      }
    },
    watch: {
      classFilter(value) {
        this.afterFilterObjects = this.objects.filter(item => item.className.match(value))
      }
    },
    created() {
      this.id = this.$route.params.id

      this.getObjects()
    },
  }
</script>

<style scoped>

</style>
