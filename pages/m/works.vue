<template>
  <div class="work-page">
    <div class="bg">学生作品</div>
    <div class="statement">
      <div class="statement-wrapper">
        <div class="statement-item">
          <span class="iconfont">&#xe8fd;</span>
          <span>照片如有侵权，请及时与我们联系，我们会尽快删除！</span>
        </div>
        <div class="statement-item">
          <span class="iconfont">&#xe8fd;</span>
          <span>照片如有侵权，请及时与我们联系，我们会尽快删除！</span>
        </div>
      </div>
    </div>
    <div v-for="(catalog, index) in works" :key="index" class="module">
      <div class="module-title">
        <div>{{ catalog.catalogCh }}</div>
      </div>
      <div class="module-content">
        <div
          v-for="(work, workIndex) in catalog.catalogWorks"
          :key="workIndex"
          class="work"
        >
          <img :url="work.img" />
          <!-- <p>
            <span class="color-k">作品名：</span
            ><span>{{ work.workName }}</span>
          </p>
          <p>
            <span class="color-k">作者：</span><span>{{ work.author }}</span>
          </p>
          <p>
            <span class="color-k">年龄：</span><span>{{ work.age }}</span>
          </p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { works } from './config.js'

export default Vue.extend({
  data() {
    return {
      works
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      Array.from(document.querySelectorAll('.module-content .work')).forEach(
        workDom => {
          const imgDom = workDom.getElementsByTagName('img')[0]
          const src = imgDom.getAttribute('url')
          const image = new Image()
          image.src = src
          const width = imgDom.width
          image.onload = function() {
            const w = image.width
            const h = image.height
            const imgDomHeight = Math.round((h * width) / w)
            // imgDom.style.height = `${imgDomHeight}px`
            const height = imgDomHeight
            imgDom.src = src
            workDom.style.gridRowEnd = `span ${~~(height / 10)}`
          }
        }
      )
    }
  }
})
</script>

<style lang="scss" scoped>
.work-page {
  text-align: left;
  font-size: 28px;
  line-height: 50px;
  margin-bottom: 20px;
  .bg {
    background: skyblue;
    height: 500px;
    text-align: center;
    line-height: 500px;
    font-size: 48px;
    font-weight: 600;
    color: white;
  }
  .module {
    &-title {
      font-size: 40px;
      color: #303033;
      text-align: left;
      padding-left: 30px;
      font-weight: 500;
      position: relative;
      &::before {
        position: absolute;
        content: '';
        top: 10px;
        height: 30px;
        width: 0px;
        left: 20px;
        border-left: 4px solid #e60000;
      }
    }
  }
  .module-content {
    margin-top: 10px;
    margin-bottom: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 5px;
    row-gap: 5px;
    grid-auto-rows: 10px;
    outline: none;
    border: none;

    .work {
      grid-row-start: auto;
      border: none;
      outline: none;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .statement {
    text-align: left;
    font-size: 28px;
    padding: 5px 0px;
    white-space: nowrap;
    overflow: hidden;
    .statement-wrapper {
      animation: statementMove 6s linear infinite;
    }
    .statement-item {
      width: 708px;
      display: inline-block;
    }
    .iconfont {
      font-size: 20px;
      color: #f3ce03;
    }
  }
}

@keyframes statementMove {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-708px);
  }
}
</style>
