<template>
  <div class="row">
    <div class="col-md-2">
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
    </div>

    <div class="col-md-10">
      <div class="card">
        <router-view></router-view>
      </div>
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
  .card {
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, .04);
    padding: 15px 0;
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
