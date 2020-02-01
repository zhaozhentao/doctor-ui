<template>
  <div class="row">
    <div class="col-md-8 col-md-offset-2">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">JVM</h3>
        </div>
        <van-skeleton class="van-skeleton" title :row="8" v-if="loading"/>
        <table class="table table-hover" v-if="!loading">
          <tbody>
          <tr v-for="jvm in jvms" :key="jvm.vmid">
            <td class="col-md-2">
              <div>PID:</div>
              <div style="margin-top: 4px;">Name:</div>
            </td>
            <td class="col-md-10">
              <router-link :to="`/jvm/${jvm.vmid}/vm`">
                <div>{{ jvm.vmid }}</div>
                <div style="margin-top: 4px; word-break: break-all;">
                  {{ jvm.displayName }}
                </div>
              </router-link>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
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
  td {
    padding-top: 12px !important;
    padding-bottom: 12px !important;
  }

  td:first-child {
    width: 60px;
  }
</style>
