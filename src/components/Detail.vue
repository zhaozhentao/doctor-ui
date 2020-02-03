<template>
  <el-row>
    <el-row>
      <el-col :span="4">
        <table class="table table-hover card">
          <tbody>
          <tr>
            <div>
              <router-link :to="`/jvm/${id}/vm`">VM概要</router-link>
            </div>
          </tr>

          <tr>
            <div>
              <router-link :to="`/jvm/${id}/memory`">内存</router-link>
            </div>
          </tr>

          <tr>
            <div>
              <router-link :to="`/jvm/${id}/thread`">线程</router-link>
            </div>
          </tr>

          <tr>
            <div>
              <router-link :to="`/jvm/${id}/objects`">堆对象统计</router-link>
            </div>
          </tr>
          </tbody>
        </table>
      </el-col>

      <el-col :span="19" :offset="1">
        <div class="card">
          <router-view/>
        </div>
      </el-col>
    </el-row>

    <el-row>
    </el-row>
  </el-row>
</template>

<script>
  export default {
    name: 'Detail',
    data() {
      return {
        id: null,
        loading: true,
      }
    },
    methods: {},
    created() {
      this.id = this.$route.params.id
    }
  }
</script>

<style scoped>
  .card {
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, .04);
  }

  tr:first-child {
    margin-top: 10px;
  }

  tr:last-child {
    margin-bottom: 10px;
  }

  tr > div {
    padding: 10px;
  }
</style>
