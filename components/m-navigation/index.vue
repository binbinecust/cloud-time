<template>
  <div class="nav-bar-wrapper">
    <div class="nav-bar">
      <!-- <a href="https://m.focus.cn/bj" class="logo"></a> -->
      <a class="logo" @click="changeRoute('index')"> </a>
      <div class="right">
        <div
          class="experience"
          :class="visible ? 'close' : ''"
          @click="showForm"
        >
          预约体验
        </div>
        <div class="iconfont" @click="toggleModel">
          {{ visible ? '&#xe6f0;' : '&#xe6fd;' }}
        </div>
      </div>
    </div>
    <div v-if="visible" class="model-wrapper">
      <div class="mask" @click="hideModel"></div>
      <div class="content">
        <a @click="changeRoute('interpretation')">
          <img
            src="https://t.focus-res.cn/fe-node/assets/images/recognization.97e32b57.png"
            alt=""
          />
          <span>解读云时光</span>
        </a>
        <a @click="changeRoute('course')">
          <img
            src="https://t.focus-res.cn/fe-node/assets/images/recognization.97e32b57.png"
            alt=""
          />
          <span>课程简介</span>
        </a>
        <a @click="changeRoute('teacher-introduction')">
          <img
            src="https://t.focus-res.cn/fe-node/assets/images/recognization.97e32b57.png"
            alt=""
          />
          <span>教师介绍</span>
        </a>
        <a @click="changeRoute('activity')">
          <img
            src="https://t.focus-res.cn/fe-node/assets/images/recognization.97e32b57.png"
            alt=""
          />
          <span>主题活动</span>
        </a>
        <a @click="changeRoute('works')">
          <img
            src="https://t.focus-res.cn/fe-node/assets/images/recognization.97e32b57.png"
            alt=""
          />
          <span>学生作品</span>
        </a>
      </div>
    </div>
    <div v-if="formVisible">
      我是表单
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import throttle from 'lodash.throttle'

export default Vue.extend({
  data() {
    return {
      visible: false,
      formVisible: false,
      pageYOffset: 0
    }
  },
  mounted() {
    this.initScroll()
  },
  methods: {
    changeRoute(path) {
      this.$router.push(path)
      this.visible = false
    },
    showForm() {
      this.formVisible = true
      this.fixedBodyPosition()
    },
    toggleModel() {
      this.visible = !this.visible
    },
    hideModel() {
      this.visible = false
    },

    initScroll() {
      const navbarDomClassList = document.querySelector('body').classList
      window.addEventListener('scroll', () =>
        throttle(() => {
          if (window.pageYOffset > 0) {
            navbarDomClassList.add('scroll')
          } else {
            navbarDomClassList.remove('scroll')
          }
        }, 300)()
      )
    },

    fixedBodyPosition(showPopup = true) {
      // const curPage = this.$route.name
      const classLists = document.querySelector('body').classList
      if (showPopup) {
        this.pageYOffset = window.pageYOffset
        document.querySelector('body').style = `top: -${window.pageYOffset}px`
        setTimeout(() => classLists.add('fixed'), 100)
      } else {
        classLists.remove('fixed')
        scrollTo(0, this.pageYOffset)
      }
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/style/mixins.scss';
body {
  &.fixed {
    position: fixed;
    left: 0;
    right: 0;
  }
}
.nav-bar-wrapper {
  position: fixed;
  top: 0;
  z-index: 99999999;

  .nav-bar {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 98px;
    padding: 21px 30px;
    box-sizing: border-box;
    color: white;
    background: rgba(0, 0, 0, 0.5);
    text-align: center;
    z-index: 99999999;
    display: flex;
    align-items: center;

    a.logo {
      display: inline-block;
      width: 179px;
      height: 36px;
      background: url('//t.focus-res.cn/fe-node/assets/images/focus-logo1.f86de30b.png')
        no-repeat;
      background-size: cover;
      cursor: pointer;
    }

    // .sale-center {
    //   position: absolute;
    //   top: 35px;
    //   left: 50%;
    //   transform: translate(-50%, -50%);
    //   font-family: '微软雅黑';
    //   font-size: 30px;
    //   margin-top: 15px;
    //   color: white;
    //   display: inline-block;
    //   cursor: pointer;
    // }

    .right {
      position: absolute;
      right: 30px;
      top: 21px;
      line-height: 0;

      .experience {
        display: inline-block;
        padding: 8px 20px;
        font-size: 28px;
        line-height: 40px;
        font-weight: 300;
        text-align: center;
        // border: 1px solid white;
        @include m-r1b(#fff);
        border-radius: 2px;
        margin-right: 15px;
        &.close {
          margin-right: 13px;
        }
      }
      .iconfont {
        display: inline-block;
        font-size: 48px;
        vertical-align: middle;
      }
    }
  }

  .model-wrapper {
    position: fixed;
    height: calc(100vh - 98px);
    // height: 100vh;
    width: 100vw;
    top: 98px !important;
    z-index: 99999;
    // animation: nav-dropdown 1s linear normal;

    .mask {
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: -1;
    }

    .content {
      // display: none;
      background: white;
      padding: 50px 70px;
      width: 100vw;
      // position: absolute;
      box-sizing: content-box;
      height: 0;
      // top: 0;
      font-size: 32px;
      font-weight: 300;
      color: #888899;
      animation: content-dropdown 0.5s linear normal forwards;
      overflow: hidden;

      > a {
        text-align: left;
        display: block;
        margin-bottom: 50px;
        color: #333;

        &:last-child {
          margin-bottom: 0;
        }
      }

      img {
        display: inline-block;
        width: 48px;
        height: 48px;
        margin-right: 20px;
        background-size: cover;
        vertical-align: sub;
      }

      :nth-child(1) {
        // &::before {
        //     content: '';
        //     display: inline-block;
        //     background: url('../../../assets/recognization.png') no-repeat;
        //     width: 48px;
        //     height: 48px;
        //     margin-right: 20px;
        //     background-size: cover;
        //     vertical-align: sub;
        // }
        img {
          display: inline-block;
          width: 48px;
          height: 48px;
          margin-right: 20px;
          background-size: cover;
          vertical-align: sub;
        }
      }

      :nth-child(2) {
        // &::before {
        //     content: '';
        //     display: inline-block;
        //     background: url('../../../assets/house.png') no-repeat;
        //     width: 48px;
        //     height: 48px;
        //     margin-right: 20px;
        //     background-size: cover;
        //     vertical-align: sub;
        // }
        img {
          display: inline-block;
          width: 48px;
          height: 48px;
          margin-right: 20px;
          background-size: cover;
          vertical-align: sub;
        }
      }

      :nth-child(3) {
        // &::before {
        //     content: '';
        //     display: inline-block;
        //     background: url('../../../assets/car.png') no-repeat;
        //     width: 48px;
        //     height: 48px;
        //     margin-right: 20px;
        //     background-size: cover;
        //     vertical-align: sub;
        // }

        img {
          display: inline-block;
          width: 48px;
          height: 48px;
          margin-right: 20px;
          background-size: cover;
          vertical-align: sub;
        }
      }

      :nth-child(4) {
        // &::before {
        //     content: '';
        //     display: inline-block;
        //     background: url('../../../assets/wap/about.png') no-repeat;
        //     width: 48px;
        //     height: 48px;
        //     margin-right: 20px;
        //     background-size: cover;
        //     vertical-align: sub;
        // }

        img {
          display: inline-block;
          width: 48px;
          height: 48px;
          margin-right: 20px;
          background-size: cover;
          vertical-align: sub;
        }
      }
    }
  }
}

.scroll .nav-bar {
  background: white;
  animation: nav-animation 1s linear normal forwards;

  a.logo {
    background: url('https://t.focus-res.cn/fe-node/assets/images/recognization.97e32b57.png')
      no-repeat;
    background-size: cover;
  }

  .sale-center {
    color: rgba(230, 0, 0, 1) !important;
  }

  .right .experience {
    color: rgba(230, 0, 0, 1);
    @include m-r1b(#e60000);
    // border: 1px solid rgba(230, 0, 0, 1) !important;
  }

  .icon {
    color: #2e2e33;
  }
}

@keyframes nav-animation {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes content-dropdown {
  0% {
    height: 0;
  }

  100% {
    height: 450px;
  }
}
</style>
