<template>
  <div class="course-page">
    <div class="bg">
      课程简介
    </div>
    <div class="course-content">
      <div class="nav-wrapper">
        <mt-navbar v-model="selected">
          <mt-tab-item
            v-for="course in courses"
            :id="course.id"
            :key="course.id"
            >{{ course.name }}</mt-tab-item
          >
        </mt-navbar>
      </div>

      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item
          v-for="course in courses"
          :id="course.id"
          :key="course.id"
          class="content-item"
        >
          <div class="head-img">
            <img width="100%" :src="course.headImg" alt="" />
          </div>

          <div class="course-title">{{ course.name }}</div>
          <div class="mb-10">
            <span class="color-k">适合年龄：</span
            ><span>{{ course.age[0] }}-{{ course.age[1] }}</span>
          </div>
          <div class="mb-10">
            <span class="color-k">课程阶段：</span>
            <span v-for="(stage, stageIndex) in course.stages" :key="stageIndex"
              >{{ stage.name }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
            >
          </div>
          <div class="mb-10">
            <span class="color-k">课程介绍：</span
            ><span>{{ course.introduction }}</span>
          </div>
          <div class="stages">
            <div
              v-for="(stage, stageIndex) in course.stages"
              :key="stageIndex"
              class="stage"
            >
              <div class="stage-img">
                <div class="label">
                  {{ '阶段' + (stageIndex + 1) + '：' + stage.name }}
                </div>
                <img width="100%" :src="stage.img" alt="" />
              </div>

              <div class="des">{{ stage.des }}</div>
            </div>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { courses } from './config.js'

export default Vue.extend({
  data() {
    return {
      selected: 'chuangyi',
      courses: [].concat.apply([], courses)
    }
  },
  methods: {}
})
</script>

<style lang="scss">
.course-page {
  .mint-tab-item-label {
    font-size: 32px;
  }
}
</style>

<style lang="scss" scoped>
.course-page {
  text-align: left;
  font-size: 28px;
  .bg {
    background: orange;
    height: 500px;
    text-align: center;
    line-height: 500px;
    font-size: 48px;
    font-weight: 600;
    color: white;
  }
  .nav-wrapper {
    overflow-x: scroll;
    height: 80px;
    .mint-navbar {
      width: 130vw;
      a {
        color: #5b9fab;
      }
    }
  }
  .course-content {
    .content-item {
      padding: 10px;
      .head-img {
        width: 600px;
        margin: 0 auto;
        border-radius: 40px;
        overflow: hidden;
      }
      .course-title {
        text-align: center;
        font-size: 40px;
        font-weight: 500;
        color: #303033;
      }
      .stages {
        margin-top: 20px;
        .stage-img {
          position: relative;
          .label {
            position: absolute;
            top: 0;
            left: 0;
            padding: 10px 30px;
            background: #55919c;
            border-radius: 40px 0 40px 0;
            color: white;
            font-weight: 600;
            font-size: 32px;
          }
        }
        .stage {
          margin-bottom: 20px;
          .des {
            margin-top: 10px;
            text-indent: 2em;
          }
        }
      }
    }
  }
}
.mb-10 {
  margin-bottom: 10px;
}
</style>
