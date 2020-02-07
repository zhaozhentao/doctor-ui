<template>
  <div class="row">
    <div class="col-md-10 col-md-offset-1">
      <el-card>
        <van-skeleton class="van-skeleton" title :row="8" v-if="loading"/>

        <div v-if="!loading">
          <el-tabs v-model="activeName">
            <el-tab-pane label="本地JVM" name="first">
              <el-table :data="jvms" style="width: 100%">
                <el-table-column align="center" prop="vmid" label="PID" width="100px"/>

                <el-table-column prop="displayName" label="JVM" :show-overflow-tooltip="true">
                  <template slot-scope="scope">
                    <router-link :to="`/jvm/${scope.row.vmid}/vm`">{{ scope.row.displayName }}</router-link>
                  </template>
                </el-table-column>

                <el-table-column align="center" label="操作" width="120px">
                  <template slot-scope="scope">
                    <el-button type="text" v-if="scope.row.connected" v-on:click="disConnect(scope.row.vmid)">断开
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>

            <el-tab-pane label="远程连接" name="second">
              <el-form :model="form">
                <el-form-item label="Host">
                  <el-button @click="explain = true" type="text">说明 <i class="el-icon-info"></i></el-button>
                  <el-input v-model="form.host" placeholder="ip:port"/>
                </el-form-item>
                <el-form-item label="用户名">
                  <el-input v-model="form.userName" placeholder="用户名"/>
                </el-form-item>
                <el-form-item label="密码">
                  <el-input v-model="form.password" placeholder="密码"/>
                </el-form-item>
              </el-form>

              <div style="text-align: right;">
                <el-button type="primary" @click="connect">确 定</el-button>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-card>
    </div>

    <el-dialog title="远程连接说明" width="80%" :visible.sync="explain">
      <div class="explain_title">
        不设置验证方式:
      </div>

      <pre>
添加启动参数

-Djava.rmi.server.hostname=localhost
-Dcom.sun.management.jmxremote
-Dcom.sun.management.jmxremote.port=端口(远程连接时的端口)
-Dcom.sun.management.jmxremote.authenticate=false
-Dcom.sun.management.jmxremote.ssl=false

完整例子:
java -Djava.rmi.server.hostname=localhost \
  -Dcom.sun.management.jmxremote \
  -Dcom.sun.management.jmxremote.port=端口 \
  -Dcom.sun.management.jmxremote.authenticate=false \
  -Dcom.sun.management.jmxremote.ssl=false -jar xxx.jar
      </pre>

      <div class="explain_title" style="margin-top: 20px;">
        带验证方式:
      </div>

      <pre>
1 编辑 /usr/java/jdk1.8.0_60/jre/lib/management/jmxremote.password(jdk目录位置按实际情况)，将最后的注释去掉，并设置远程连接时的密码
#monitorRole password
#controlRole password

2 编辑 /usr/java/jdk1.8.0_60/jre/lib/management/jmxremote.access(jdk目录位置按实际情况)，将文件最后的账号注释去掉(账号与上面的对应)

3 添加启动参数启动
-Djava.rmi.server.hostname=localhost
-Dcom.sun.management.jmxremote
-Dcom.sun.management.jmxremote.port=端口(远程连接时的端口)
-Dcom.sun.management.jmxremote.authenticate=true
-Dcom.sun.management.jmxremote.ssl=false
      </pre>

      <div class="explain_title" style="margin-top: 20px;">
        测试远程连接
      </div>

      <pre>
Host: 111.229.177.38:9099
用户名: controlRole
密码: R&D
      </pre>
    </el-dialog>
  </div>
</template>

<script>
  let axios = require('axios');

  export default {
    name: 'Home',
    data() {
      return {
        explain: false,
        form: {
          host: null,
          userName: null,
          password: null,
        },
        activeName: 'first',
        loading: true,
        jvms: null
      }
    },
    methods: {
      async connect() {
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
  .explain_title {
    margin-top: -34px;
    color: #303133;
    font-weight: bold;
    font-size: 16px;
    line-height: 32px;
  }
</style>
