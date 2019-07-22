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
      <div class="imgs">
        <Card
          v-for="(work, index) in catalog.imgs"
          :key="index"
          class="img-wrapper"
        >
          <img :src="work.url" alt="" />
          <p>作品名：{{ work.workName || '未命名' }}</p>
          <p>
            <span>作者：{{ work.student || '未知' }}</span
            ><span>年龄：{{ work.age || '未知' }}</span>
          </p>
        </Card>
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
  .imgs {
    width: 100%;
    text-align: left;
  }
  .title {
    margin-bottom: 20px;
  }
  .img-wrapper {
    width: 210px;
    display: inline-block;
    margin-right: 20px;
    margin-bottom: 10px;
    text-align: center;
    img {
      height: 200px;
    }
    p {
      text-indent: 0;
      text-align: center;
    }
    p:nth-of-type(2) {
      span:first-child {
        margin-right: 10px;
      }
    }
  }
}
</style>
