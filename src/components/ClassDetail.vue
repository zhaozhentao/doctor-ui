<template>
  <el-row>
    <p class="head">Class Detail</p>

    <el-row>
      <el-col :span="4">
        <div class="grid-content bg-purple">类名</div>
      </el-col>

      <el-col :span="20">
        <div class="grid-content bg-purple-light item-content">
          {{ data.className }}
        </div>
      </el-col>
    </el-row>

    <el-divider/>

    <el-row>
      <el-col :span="4">
        <div class="grid-content bg-purple">父类</div>
      </el-col>

      <el-col :span="20">
        <div class="grid-content bg-purple-light item-content">
          {{ data.superClassName }}
        </div>
      </el-col>
    </el-row>

    <el-divider/>

    <el-row>
      <el-col :span="4">
        <div class="grid-content bg-purple">成员变量</div>
      </el-col>

      <el-col :span="20">
        <div style="padding-bottom: 4px;" v-for="f in data.fields" :key="f.name">
          {{ f.name }} ({{ f.signature }})
        </div>
      </el-col>
    </el-row>

    <el-divider/>

    <el-row>
      <el-col :span="4">
        <div class="grid-content bg-purple">静态成员变量</div>
      </el-col>

      <el-col :span="20">
        <div style="padding-bottom: 4px;" v-for="f in data.staticFields" :key="f.name">
          {{ f.name }} ({{ f.signature }}) :

          <span v-if="f.idString == null">{{ f.value }}</span>

          <router-link :to="`/jvm/${id}/objects/${f.idString}`" v-if="f.idString">
            {{ f.value }} ({{ f.size }} bytes)
          </router-link>
        </div>
      </el-col>
    </el-row>

    <el-divider/>

    <el-row>
      <el-col :span="4">
        <div class="grid-content bg-purple">实例对象</div>
      </el-col>

      <el-col :span="20">
        <div style="padding-bottom: 4px;" v-for="f in data.instances" :key="f.objectId">
          <router-link :to="`/jvm/${id}/objects/${f.objectId}`">
            {{ f.name }} ({{ f.size }} bytes)
          </router-link>
        </div>
      </el-col>
    </el-row>

    <el-divider/>
  </el-row>
</template>

<script>
  let axios = require('axios');

  export default {
    name: 'ClassDetail',
    data() {
      return {
        id: null,
        classId: null,
        data: null
      }
    },
    methods: {
      async getObjectDetail() {
        let result = await axios.get(`/api/jvms/${this.id}/class/${this.classId}`)

        this.data = result.data
      }
    },
    created() {
      this.id = this.$route.params.id
      this.classId = this.$route.params.classId

      this.getObjectDetail()
    },
  }
</script>

<style scoped>
  .el-divider--horizontal {
    margin: 10px 0;
  }
</style>
