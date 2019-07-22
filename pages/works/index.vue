<template>
  <div class="works main">
    <div
      v-for="catalog in catalogs"
      :key="catalog.catalog"
      class="module-wrapper"
    >
      <div class="title">
        <Icon type="ios-leaf" />
        <h2>{{ catalog.name }}</h2>
      </div>
      <div
        v-for="(work, index) in catalog.imgs"
        :key="index"
        class="img-wrapper"
      >
        <img :src="work.url" alt="" />
        <p>作品名：{{ work.workName || '未命名作品' }}</p>
        <p>
          <span>作者：{{ work.student || '未知作者' }}</span
          ><span>年龄：{{ work.age || '未知年龄' }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import catalogs from './works.config'
export default Vue.extend({
  data() {
    return {
      catalogs: catalogs
    }
  },
  methods: {
    // ======================事件处理函数======================
    // ======================业务逻辑函数======================
    // ========================纯函数=========================
    // ======================网络请求函数======================
    // =======================初始化函数=======================
  }
})
</script>

<style lang="scss" scoped>
.works {
  .img-wrapper {
    img {
      height: 200px;
    }
  }
}
</style>
