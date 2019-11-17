<template>
  <div class="m-index">
    <div class="swipe">
      <mt-swipe :auto="4000">
        <mt-swipe-item class="item">1</mt-swipe-item>
        <mt-swipe-item class="item">2</mt-swipe-item>
        <mt-swipe-item class="item">3</mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="module">
      <div class="module-title">
        <div class="left">课程简介</div>
        <div class="right" @touchend="gotoPage('course')">
          <span>查看更多</span>
          <span class="iconfont icon">&#xe602;</span>
        </div>
      </div>
      <div class="module-content cards">
        <div
          v-for="(courseRow, index) in courses"
          :key="index"
          class="row"
          :class="index === 0 ? 'row-1' : ''"
        >
          <div
            v-for="course in courseRow"
            :key="course.id"
            class="card"
            @touchend="gotoPage('course', course.id)"
          >
            <img :src="course.headImg" alt="" />
            <p>{{ course.name }}</p>
            <p>
              <span class="color-k">适合年龄：</span>{{ course.age[0] }}-{{
                course.age[1]
              }}岁
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="module themes">
      <div class="module-title">
        <div class="left">主题活动</div>
        <div class="right" @touchend="gotoPage('activity')">
          <span>查看更多</span>
          <span class="iconfont icon">&#xe602;</span>
        </div>
      </div>
      <div class="module-content">
        <div v-for="(theme, index) in themes" :key="index" class="theme">
          <div class="base-info">
            <div class="left"><img :src="theme.headImg" alt="" /></div>
            <div class="right">
              <p @touchend="gotoPage('activity', theme.id)">
                <span>{{ theme.name }}</span
                ><span class="iconfont icon">&#xe602;</span>
              </p>
              <p>
                <span class="color-k">时间：</span
                ><span>{{ theme.startTime }}-{{ theme.endTime }}</span>
              </p>
              <p>
                <span class="color-k">主讲老师：</span
                ><span>{{ theme.teachers.join(',') }}</span>
              </p>
            </div>
          </div>
          <div class="des">
            <span class="color-k">主题描述：</span>
            <span class="des-info"> {{ theme.des }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="module">
      <div class="module-title">
        <div class="left">学生作品</div>
        <div class="right" @touchend="gotoPage('works')">
          <span>查看更多</span>
          <span class="iconfont icon">&#xe602;</span>
        </div>
      </div>
      <div class="module-content cards">
        <div
          v-for="(workRow, indexRow) in indexWorks"
          :key="indexRow"
          class="row"
        >
          <div v-for="(work, index) in workRow" :key="index" class="card work">
            <img :src="work.img" :alt="work.name" />
            <p>{{ work.workName }}</p>
            <p>
              <span class="color-k">作者：</span
              ><span class="value-author">{{ work.author }}</span
              ><span class="color-k">年龄：</span><span>{{ work.age }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="module">
      <div class="module-title">
        <div class="left">教师介绍</div>
        <div class="right" @touchend="gotoPage('teacher')">
          <span>查看更多</span>
          <span class="iconfont icon">&#xe602;</span>
        </div>
      </div>
      <div class="module-content">
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { themes, courses, indexWorks, teachers } from '../config.js'
export default Vue.extend({
  data() {
    return {
      themes,
      courses,
      indexWorks,
      teachers
    }
  },
  methods: {
    gotoPage(page = 'index', anchor) {
      anchor
        ? this.$router.push({ path: `/m/${page}`, query: { anchor: anchor } })
        : this.$router.push({ path: `/m/${page}` })
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/style/mixins.scss';
.m-index {
  height: 5000px;
}
.swipe {
  height: 498px;
  .item {
    &:nth-child(1) {
      background: red;
    }
    &:nth-child(2) {
      background: yellow;
    }
    &:nth-child(3) {
      background: green;
    }
  }
}
.cards {
  padding: 20px;
  .row {
    display: flex;
    justify-content: space-between;
    &.row-1 {
      margin-bottom: 20px;
    }
    .card {
      border-radius: 4px;
      flex: 1;
      width: 200px;
      background: white;
      box-shadow: 0 0.02rem 0.3rem 0 rgba(0, 0, 0, 0.07);
      padding-bottom: 10px;
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
}

.themes {
  background: #f8f8f8;
  padding: 20px;
  font-size: 24px;
  .theme {
    padding: 20px 0 20px 20px;
    border-radius: 4px;
    &:not(:last-child) {
      @include m-r1bb();
    }
    .base-info {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
    }
    .left {
      margin-right: 40px;
      overflow: hidden;
      img {
        height: 130px;
        vertical-align: middle;
      }
    }
    .right {
      > p:not(:last-child) {
        margin-bottom: 10px;
      }
      p:nth-child(1) {
        font-size: 32px;
        font-weight: bold;
      }
      .icon {
        font-size: 32px;
      }
    }
    .des {
      text-align: left;
      &-info {
        display: inline-block;
        width: calc(100% - 200px);
        vertical-align: bottom;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}

.work {
  .value-author {
    margin-right: 10px;
  }
}

.module {
  padding-top: 40px;
  &-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 20px;
    .left {
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
    .right {
      .icon {
        margin-left: -10px;
      }
    }
  }
}
</style>
