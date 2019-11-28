<template>
  <div class="teacher-page">
    <div class="bg">
      教师介绍
    </div>
    <div class="module">
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
            <span>个人经历：</span>
            <span v-for="(exp, index) in teacher.experiences" :key="index">{{
              exp
            }}</span>
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
    <div
      class="switch"
      :class="currentTeacher === 'mengxi' ? 'mengxi' : 'lutingting'"
      @touchend="changeTeacher"
    ></div>
  </div>
</template>

<script>
import Vue from 'vue'
import throttle from 'lodash.throttle'
import { teachers } from './config.js'
let mengxiHeight = 0
let bgHeight = 0
export default Vue.extend({
  data() {
    return {
      teachers,
      currentTeacher: 'mengxi'
    }
  },
  mounted() {
    mengxiHeight = document
      .getElementsByClassName('mengxi')[0]
      .getBoundingClientRect().height
    bgHeight = document.getElementsByClassName('bg')[0].getBoundingClientRect()
      .height
    this.initScroll()
  },
  destroyed() {
    window.removeEventListener('scroll', this.srcollListener)
  },
  methods: {
    changeTeacher() {},
    srcollListener: throttle(() => {
      const pageYOffset = window.pageYOffset
      console.log(this)
      if (pageYOffset > bgHeight + mengxiHeight) {
        this.currentTeacher = 'lutingting'
      }
      console.log(pageYOffset)
    }, 300),
    initScroll() {
      const srcollListener = throttle(() => {
        const pageYOffset = window.pageYOffset
        console.log(this)
        if (pageYOffset > bgHeight + mengxiHeight) {
          this.currentTeacher = 'lutingting'
        }
        console.log(pageYOffset)
      }, 300)
      window.addEventListener('scroll', srcollListener)
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/style/mixins.scss';
.teacher-page {
  text-align: left;
  .bg {
    background: pink;
    height: 500px;
    text-align: center;
    line-height: 500px;
    font-size: 48px;
    font-weight: 600;
    color: white;
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

  .switch {
    position: fixed;
    right: 20px;
    z-index: 99999999;
    bottom: 220px;
    width: 100px;
    height: 100px;
    border-radius: 20px;
    background: linear-gradient(#ff4b52, #f7ad9b);
    &.mengxi {
      background: url('../../assets/img/teacher1.jpeg') no-repeat;
    }
    &.lutingting {
      background: url('../../assets/img/lutingting.jpeg') no-repeat;
    }
  }
}
</style>
