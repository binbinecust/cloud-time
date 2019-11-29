<template>
  <div class="m-index">
    <div class="swipe">
      <mt-swipe :auto="4000">
        <mt-swipe-item class="item">1</mt-swipe-item>
        <mt-swipe-item class="item">2</mt-swipe-item>
        <mt-swipe-item class="item">3</mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="hot">
      <div class="hot-wrapper">
        <div class="hot-item">
          <span class="iconfont">&#xe619;</span>
          <span
            >双11活动啦，大家快来学习绘画啦。双11活动啦，大家快来学习绘画啦。</span
          >
        </div>
        <div class="hot-item">
          <span class="iconfont">&#xe619;</span>
          <span
            >双11活动啦，大家快来学习绘画啦。双11活动啦，大家快来学习绘画啦。</span
          >
        </div>
      </div>
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
                ><span>{{ theme.startTime }} 至 {{ theme.endTime }}</span>
              </p>
              <p>
                <span class="color-k">主讲老师：</span
                ><span>{{ theme.teachers.join(',') }}</span>
              </p>
            </div>
          </div>
          <div class="des">
            <span class="des-info"
              ><span class="color-k">主题描述：</span>{{ theme.des }}</span
            >
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
          :class="{ 'row-1': indexRow === 0 }"
        >
          <div v-for="(work, index) in workRow" :key="index" class="card work">
            <img :src="work.img" :alt="work.name" />
            <p>{{ work.workName }}</p>
            <p class="author">
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
      <div class="module-content teachers">
        <div
          v-for="(teacher, index) in teachers"
          :key="index"
          class="teacher"
          :class="teacher.enName"
        >
          <div class="base-info">
            <div
              class="avatar left"
              @touchend="gotoPage('teacher', teacher.enName)"
            >
              <img :src="teacher.img" :alt="teacher.name" />
            </div>
            <div class="right">
              <p class="teacher-name">
                <span class="color-k">姓名：</span>
                <span>{{ teacher.name }}</span>
              </p>
              <p>
                <span class="color-k">教龄：</span>
                <span>{{ teacher.teachAge }}年</span>
              </p>
              <p>
                <span class="color-k">毕业美院：</span>
                <span>{{ teacher.university }}</span>
              </p>
              <p>
                <span class="color-k">教学特点：</span>
                <span>{{ teacher.specialty }}</span>
              </p>
            </div>
          </div>
          <div class="des">
            <span class="des-info"
              ><span class="color-k">个人简介：</span>{{ teacher.des }}</span
            >
          </div>
          <div class="masterpiece cards">
            <p class="color-k tl">代表作品：</p>
            <div class="t-works row">
              <div
                v-for="(item, subIndex) in teacher.works"
                :key="subIndex"
                class="t-work card"
              >
                <img
                  :src="item.img"
                  :alt="item.name"
                  @touchend="gotoPage('teacher', teacher.enName)"
                />
                <p>{{ item.name }}</p>
                <p class="size">
                  <span class="color-k">尺寸：</span>{{ item.size }}
                </p>
                <p class="work-des">
                  <span class="color-k ">作品描述：</span>{{ item.des }}
                </p>
              </div>
            </div>
          </div>
        </div>
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

.hot {
  text-align: left;
  font-size: 28px;
  padding: 5px 0px;
  white-space: nowrap;
  overflow: hidden;
  .hot-wrapper {
    animation: hotMove 6s linear infinite;
  }
  .hot-item {
    width: 936px;
    display: inline-block;
  }
  .iconfont {
    font-size: 20px;
    color: #e60000;
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
        margin-right: 10px;
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
  // background: #f8f8f8;
  // padding: 20px;
  font-size: 24px;
  .module-content {
    padding: 20px;
  }
  .theme {
    padding: 20px 0;
    border-radius: 4px;
    &:not(:last-child) {
      @include m-r1bb();
    }
  }
}

.base-info {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  .left {
    margin-right: 40px;
    overflow: hidden;
    img {
      height: 130px;
      vertical-align: middle;
    }
  }
  .right {
    text-align: left;
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
}

.des {
  text-align: left;
  &-info {
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    /*! autoprefixer: off */
    -webkit-box-orient: vertical;
    /* autoprefixer: on */
  }
}

.work {
  .author {
    padding: 0 2px;
  }
  .value-author {
    margin-right: 10px;
  }
}

.teachers {
  padding: 20px;
  // background: #f8f8f8;
  .teacher {
    &:first-child {
      padding-bottom: 20px;
      margin-bottom: 20px;
      @include m-r1bb(#d5d5d5);
    }
    .avatar {
      width: 200px;
      height: 200px;
      // border-radius: 50%;
      padding: 10px;
      overflow: hidden;
      box-sizing: border-box;
      margin-right: 20px;
      @include m-r1b(#515a6e, 50%);
      img {
        width: 180px;
        height: 180px;
        border-radius: 50%;
        animation: rotateAvatar 10s linear infinite;
      }
    }

    &.lutingting {
      .avatar img {
        animation-delay: 0.5s;
      }
    }
    .teacher-name {
      .color-k {
        font-size: 24px;
        font-weight: normal;
      }
    }
    .masterpiece {
      padding: 0;
      .tl {
        text-align: left;
        margin: 10px 0;
      }
      .size {
        margin-top: 10px;
        margin-left: 5px;
        text-align: left;
      }
      .t-works {
        display: flex;
        justify-content: space-between;
        .t-work {
          flex: 1;
          img {
            width: 100%;
          }
          .work-des {
            padding: 0 5px;
            text-align: left;
            @include ellipsis-multi-line(3);
          }
        }
      }
    }
  }
}

.module {
  padding-top: 40px;
  &:nth-child(odd) {
    background: #f8f8f8;
  }
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

@keyframes hotMove {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-936px);
  }
}
</style>
