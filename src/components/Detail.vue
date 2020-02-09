<template>
  <div class="row">
    <div class="col-md-2" style="margin-bottom: 10px;">
      <el-card :body-style="{padding: '0px'}">
        <table class="table table-hover">
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
              <router-link :to="`/jvm/${id}/class`">堆对象统计</router-link>
            </div>
          </tr>
          </tbody>
        </table>
      </el-card>
    </div>

    <div class="col-md-10">
      <el-card>
        <router-view/>
      </el-card>
    </div>
  </div>
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
  tr:first-child {
    margin-top: 10px;
  }

  tr > div {
    padding: 10px;
  }
</style>
