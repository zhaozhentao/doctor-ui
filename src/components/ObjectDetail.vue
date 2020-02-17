<template>
  <el-row>
    <p class="head">Object Detail {{ this.objectId }}</p>

    <el-row v-if="data.type == 'Value'">
      <el-col :span="4">
        <div class="grid-content bg-purple">Value</div>
      </el-col>

      <el-col :span="20">
        <div class="grid-content bg-purple-light item-content">
          {{ data.value }}
        </div>
      </el-col>
    </el-row>

    <el-row v-if="data.type == 'JavaObject'">
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">实例</div>
        </el-col>

        <el-col :span="20">
          <div class="grid-content bg-purple-light item-content">
            {{ data.instance.name }} ({{ data.instance.size }} bytes)
          </div>
        </el-col>
      </el-row>

      <el-divider/>

      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">Class</div>
        </el-col>

        <el-col :span="20">
          <div class="grid-content bg-purple-light item-content">
            {{ data.class}}
          </div>
        </el-col>
      </el-row>

      <el-divider/>

      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">成员变量</div>
        </el-col>

        <el-col :span="20">
          <div style="padding-bottom: 4px;" v-for="f in data.members" :key="f.objectId">
            {{ f.name }} ({{ f.signature }}) :

            <span v-if="f.idString == null">{{ f.value }}</span>

            <router-link :to="`/jvm/${id}/objects/${f.idString}`" v-if="f.idString">
              {{ f.value }} ({{ f.size }} bytes)
            </router-link>
          </div>
        </el-col>
      </el-row>

      <el-divider/>
    </el-row>

    <el-row v-if="data.referencesTo != null && data.referencesTo.referencesToThisObject != null"
            style="margin-top: 10px;">
      <el-col :span="4">
        <div class="grid-content bg-purple">References to this object</div>
      </el-col>

      <el-col :span="20">
        <el-row style="margin-bottom: 4px;" v-for="i in data.referencesTo.referencesToThisObject" :key="i.thing.objectAddress">
          <router-link :to="`/jvm/${id}/objects/${i.thing.objectAddress}`" v-if="i.thing.objectAddress != null">
            {{ i.thing.valueString }} ({{ i.thing.size }} bytes)
          </router-link>

          <span v-if="i.thing.objectAddress == null">
            {{ i.thing.valueString }} ({{ i.thing.size }} bytes)
          </span>

          : {{ i.describe }}
        </el-row>
      </el-col>
    </el-row>

    <el-row v-if="data.type == 'JavaClass'">
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">ClassName</div>
        </el-col>

        <el-col :span="4">
          <div class="grid-content bg-purple">{{ data.className }}</div>
        </el-col>
      </el-row>

      <el-divider/>

      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">SuperClass</div>
        </el-col>

        <el-col :span="4">
          <div class="grid-content bg-purple">
            <router-link :to="`/jvm/${id}/class/${data.Superclass.classAddress}`">{{ data.Superclass.class }}</router-link>
          </div>
        </el-col>
      </el-row>

      <el-divider/>

      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">ClassLoader</div>
        </el-col>

        <el-col :span="20">
          <div class="grid-content bg-purple">
            <router-link :to="`/jvm/${id}/objects/${data.ClassLoader.objectAddress}`">{{ data.ClassLoader.valueString }}({{ data.ClassLoader.size }} bytes)</router-link>
          </div>
        </el-col>
      </el-row>
    </el-row>
  </el-row>
</template>

<script>
  let axios = require('axios');

  export default {
    name: 'ObjectDetail',
    data() {
      return {
        id: null,
        objectId: null,
        data: {}
      }
    },
    methods: {
      async objectDetail() {
        let result = await axios.get(`/api/jvms/${this.id}/objects/${this.objectId}`)

        this.data = result.data
      }
    },
    created() {
      this.id = this.$route.params.id
      this.objectId = this.$route.params.objectId

      this.objectDetail()
    },
  }
</script>

<style scoped>
  .el-divider--horizontal {
    margin: 10px 0;
  }
</style>
