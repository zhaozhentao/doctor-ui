<template>
  <div class="content">
    <p class="head">VM概要</p>
    <van-skeleton class="van-skeleton" title :row="8" v-if="loading"/>

    <div v-if="!loading">
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">主类</div>
        </el-col>
        <el-col :span="20">
          <div class="grid-content bg-purple-light item-content">
            {{ data.mainClass }}
          </div>
        </el-col>
      </el-row>

      <el-divider></el-divider>

      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">运行时间</div>
        </el-col>
        <el-col :span="20">
          <div class="grid-content bg-purple-light item-content">
            {{ data.upTime }}
          </div>
        </el-col>
      </el-row>

      <el-divider></el-divider>

      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">进程CPU时间</div>
        </el-col>
        <el-col :span="20">
          <div class="grid-content bg-purple-light item-content">
            {{ (data.progressCpuTime / 1000).toFixed(3) }} 秒
          </div>
        </el-col>
      </el-row>

      <el-divider></el-divider>

      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">当前堆大小</div>
        </el-col>
        <el-col :span="20">
          <div class="grid-content bg-purple-light item-content">
            {{ data.heapUsed.toFixed(2) }} MB
          </div>
        </el-col>
      </el-row>

      <el-divider></el-divider>

      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">最大堆大小</div>
        </el-col>
        <el-col :span="20">
          <div class="grid-content bg-purple-light item-content">
            {{ data.heapMax.toFixed(2) }} MB
          </div>
        </el-col>
      </el-row>

      <el-divider></el-divider>

      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">提交的内存</div>
        </el-col>
        <el-col :span="20">
          <div class="grid-content bg-purple-light item-content">
            {{ data.heapCommitted.toFixed(2) }} MB
          </div>
        </el-col>
      </el-row>

      <el-divider></el-divider>

      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">GC</div>
        </el-col>
        <el-col :span="20">
          <div class="grid-content bg-purple-light item-content" v-for="gc in data.garbageCollectInfos" :key="gc.name">
            {{ gc.name }}收集:{{ gc.count }}, 耗时:{{ (gc.time / 1000).toFixed(3) }} 秒
          </div>
        </el-col>
      </el-row>

      <el-divider></el-divider>

      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">虚拟机</div>
        </el-col>
        <el-col :span="20">
          <div class="grid-content bg-purple-light item-content">
            {{ data.vmName }} 版本 {{ data.vmVersion }}
          </div>
        </el-col>
      </el-row>

      <el-divider></el-divider>

      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">处理器数</div>
        </el-col>
        <el-col :span="20">
          <div class="grid-content bg-purple-light item-content">
            {{ data.availableProcessors }}
          </div>
        </el-col>
      </el-row>

      <el-divider></el-divider>

      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">物理内存</div>
        </el-col>
        <el-col :span="20">
          <div class="grid-content bg-purple-light item-content">
            <div>
              总物理内存:{{ data.totalPhysicalMemorySize }} MB
            </div>
            <div>
              空闲物理内存:{{ data.freePhysicalMemorySize }} MB
            </div>
            <div>
              总交换空间:{{ data.totalSwapSpaceSize }} MB
            </div>
            <div>
              空闲交换空间:{{ data.freeSwapSpaceSize }} MB
            </div>
          </div>
        </el-col>
      </el-row>

      <el-divider></el-divider>

      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">JVM参数</div>
        </el-col>
        <el-col :span="20">
          <div class="grid-content bg-purple-light item-content" v-for="arg in data.vmArgs" :key="arg">
            {{ arg }}
          </div>
        </el-col>
      </el-row>

      <el-divider></el-divider>

      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">类路径</div>
        </el-col>
        <el-col :span="20">
          <div class="grid-content bg-purple-light item-content" v-for="path in data.classPaths" :key="path">
            {{ path }}
          </div>
        </el-col>
      </el-row>

      <el-divider></el-divider>

      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">库路径</div>
        </el-col>
        <el-col :span="20">
          <div class="grid-content bg-purple-light item-content" v-for="path in data.libraryPaths" :key="path">
            {{ path }}
          </div>
        </el-col>
      </el-row>

      <el-divider></el-divider>

      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">引导类路径</div>
        </el-col>
        <el-col :span="20">
          <div class="grid-content bg-purple-light item-content" v-for="path in data.bootstrapClassPaths" :key="path">
            {{ path }}
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  let axios = require('axios');

  export default {
    name: 'VM',
    data() {
      return {
        loading: true,
        timer: null,
        id: null,
        data: null
      }
    },
    methods: {
      async getVmArgs() {
        let result = await axios.get(`/api/jvms/${this.id}/vm`)
        this.data = result.data
        this.loading = false
      }
    },
    created() {
      this.id = this.$route.params.id

      let self = this

      this.timer = setInterval(() => {
        self.getVmArgs()
      }, 1000)
    },
    beforeDestroy() {
      clearInterval(this.timer)
    }
  }
</script>

<style scoped>
  .content {
    padding: 0 20px;
  }

  .item-content {
    word-break: break-all;
  }
</style>
