<template>
  <div class="interpretation">
    <div class="introduction">
      <div class="title">
        <Icon type="ios-leaf" />
        <h2>企业简介</h2>
      </div>
      <p>
        云时光文化传播有限公司提供全年龄段的专业美术教育，由毕业于鲁迅美术学院的两名优秀师资联合创办，致力于培养人们拥有发现美、表现美、创造美的能力。将艺术同其他学科融合，用统整的力量为实际生活创造价值。
      </p>
    </div>
    <div class="advantage">
      <div class="title">
        <Icon type="ios-leaf" />
        <h2>核心优势</h2>
      </div>
      <p></p>
    </div>
    <div class="to-patriarch">
      <div class="title">
        <Icon type="ios-leaf" />
        <h2>致家长信</h2>
      </div>
      <p></p>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {}
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
.interpretation {
  max-width: 1300px;
  margin: 50px auto;
  .introduction .title {
    margin-top: 0;
  }
  h2 {
    display: inline;
  }
  p {
    line-height: 1.6;
    text-align: left;
    text-indent: 2em;
  }
}
</style>
