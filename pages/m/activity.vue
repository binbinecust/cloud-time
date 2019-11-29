<template>
  <div class="activity-page">
    <div class="bg">
      主题活动
    </div>
    <div
      v-for="(activity, index) in activities"
      :key="index"
      class="activity module"
    >
      <div class="module-title">
        <div>{{ activity.name }}</div>
      </div>
      <div class="module-content">
        <div class="head-img">
          <img :src="activity.headImg" :alt="activity.name" />
        </div>
        <div>
          <span class="color-k">时间：</span
          ><span>{{ activity.startTime }} 至 {{ activity.endTime }}</span>
        </div>
        <div>
          <span class="color-k">主讲老师：</span
          ><span>{{ activity.teachers.join(',') }}</span>
        </div>
        <div>
          <span class="color-k">活动地址：</span
          ><span>{{ activity.position }}</span>
        </div>

        <div class="des">
          <span class="des-info"
            ><span class="color-k">主题描述：</span>{{ activity.des }}</span
          >
        </div>
        <div class="activity-imgs">
          <div class="color-k">活动趣图</div>
          <div class="imgs-wrapper">
            <div
              v-for="(img, imgIndex) in activity.imgs"
              :key="imgIndex"
              class="card"
            >
              <img :src="img" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { themes } from './config.js'

export default Vue.extend({
  data() {
    return {
      activities: themes
    }
  },
  methods: {}
})
</script>

<style lang="scss" scoped>
@import '@/assets/style/mixins.scss';
.activity-page {
  text-align: left;
  font-size: 28px;
  line-height: 50px;
  .bg {
    background: yellowgreen;
    height: 500px;
    text-align: center;
    line-height: 500px;
    font-size: 48px;
    font-weight: 600;
    color: white;
    margin-bottom: 20px;
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
        top: 18px;
        height: 30px;
        width: 0px;
        left: 20px;
        border-left: 4px solid #e60000;
      }
    }
    &-content {
      padding: 20px;
      .head-img {
        border-radius: 40px;
        overflow: hidden;
        text-align: center;
        line-height: 1;
        margin-bottom: 10px;
        img {
          width: 600px;
        }
      }

      .activity-imgs {
        .color-k {
          margin-bottom: 10px;
          color: #303033;
          font-weight: 600;
        }
        .imgs-wrapper {
          white-space: nowrap;
          overflow: scroll;
        }
      }
    }
  }

  .card {
    display: inline-block;
    border-radius: 10px;
    line-height: 1;
    padding: 5px;
    width: 310px;
    background: white;
    overflow: hidden;
    box-shadow: 0 0.02rem 0.3rem 0 rgba(0, 0, 0, 0.07);
    &:not(:last-child) {
      margin-right: 20px;
    }
    img {
      width: 100%;
    }
    p:nth-of-type(1) {
      font-size: 30px;
      font-weight: bold;
    }
    p:nth-of-type(2) {
      font-size: 24px;
    }
  }
}
</style>
