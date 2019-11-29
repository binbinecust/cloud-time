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
            <div class="avatar left">
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
            <div class="color-t">个人简介：</div>
            <div class="info-indent  lh-62">{{ teacher.des }}</div>
            <!-- <span class="des-info"
              ><span class="color-k">个人简介：</span>{{ teacher.des }}</span
            > -->
          </div>
          <div class="experiences">
            <div class="color-t">个人经历：</div>
            <div>
              <p
                v-for="(exp, expIndex) in teacher.experiences"
                :key="expIndex"
                class="info-indent lh-62"
              >
                {{ exp }}
              </p>
            </div>
          </div>
          <div class="masterpiece cards">
            <p class="color-t tl">代表作品：</p>
            <div class="t-works row">
              <div
                v-for="(item, subIndex) in teacher.works"
                :key="subIndex"
                class="t-work card "
              >
                <img :src="item.img" :alt="item.name" />
                <p class="workname">{{ item.name }}</p>
                <p class="size">
                  <span class="color-k">尺寸：</span>{{ item.size }}
                </p>
                <p class="work-des">
                  <span class="color-k ">作品描述：</span>{{ item.des }}
                </p>
              </div>
            </div>
          </div>
          <div class="awards cards">
            <p class="color-t tl">获奖证书：</p>
            <div class="content-wrapper">
              <div
                v-for="(award, awardIndex) in teacher.awards"
                :key="awardIndex"
                class="card"
              >
                <img :src="award.img" :alt="award.name" />
                <p class="awardname">{{ award.name }}</p>
              </div>
            </div>
          </div>
          <div class="views cards">
            <p class="color-t tl">教师风采：</p>
            <div class="content-wrapper">
              <div
                v-for="(view, viewIndex) in teacher.teachViews"
                :key="viewIndex"
                class="card"
              >
                <img :src="view" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="switch"
      :class="currentTeacher === 'meng' ? 'lu' : 'meng'"
      @touchend="changeTeacher"
    ></div>
  </div>
</template>

<script>
import Vue from 'vue'
import throttle from 'lodash.throttle'
import { teachers } from './config.js'
let mengHeight = 0
let bgHeight = 0
let navHeight = 0
export default Vue.extend({
  data() {
    return {
      teachers,
      currentTeacher: 'meng'
    }
  },
  mounted() {
    setTimeout(() => {
      mengHeight = document
        .getElementsByClassName('mengxi')[0]
        .getBoundingClientRect().height

      bgHeight = document
        .getElementsByClassName('bg')[0]
        .getBoundingClientRect().height
      navHeight = document
        .getElementsByClassName('nav-bar')[0]
        .getBoundingClientRect().height
    }, 500)

    this.initScroll()
  },
  destroyed() {
    window.removeEventListener('scroll', this.srcollListener)
  },
  methods: {
    changeTeacher() {
      if (this.currentTeacher === 'meng') {
        scrollTo(0, bgHeight + mengHeight - navHeight + 20)
        this.currentTeacher = 'meng'
      } else {
        scrollTo(0, bgHeight - navHeight)
        this.currentTeacher = 'lu'
      }
    },
    srcollListener: throttle(function() {
      const pageYOffset = window.pageYOffset
      if (pageYOffset > bgHeight + mengHeight - navHeight - 400 - 18) {
        if (this.currentTeacher === 'meng') {
          this.currentTeacher = 'lu'
        }
      } else {
        this.currentTeacher = 'meng'
      }
    }, 300),
    initScroll() {
      window.addEventListener('scroll', this.srcollListener)
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/style/mixins.scss';
.teacher-page {
  text-align: left;
  font-size: 28px;
  .color-t {
    margin-top: 20px;
    margin-bottom: 10px;
    color: #303033;
    font-weight: 600;
    font-size: 32px;
  }
  .info-indent {
    text-indent: 2em;
  }
  .lh-62 {
    line-height: 50px;
  }
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

      &.lu {
        .avatar img {
          animation-delay: 0.5s;
        }
      }
      .teacher-name {
        .color-k {
          font-size: 28px;
          font-weight: normal;
        }
      }
      .masterpiece {
        height: 660px;
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
          .workname {
            text-align: center;
          }
          .t-work {
            flex: 1;
            img {
              width: 100%;
            }
            .work-des {
              font-size: 24px;
              padding: 0 5px;
              text-align: left;
              @include ellipsis-multi-line(3);
            }
          }
        }
      }
      .awards,
      .views {
        padding: 0;
        .content-wrapper {
          white-space: nowrap;
          overflow: scroll;
          padding-bottom: 20px;
        }
        .card {
          display: inline-block;
          width: 310px;
          .awardname {
            text-align: center;
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
    // background: linear-gradient(#ff4b52, #f7ad9b);
    &.meng {
      background: url('../../assets/img/teacher1.jpeg') no-repeat;
      background-size: cover;
    }
    &.lu {
      background: url('../../assets/img/lutingting.jpeg') no-repeat;
      background-size: cover;
    }
  }
}
</style>
