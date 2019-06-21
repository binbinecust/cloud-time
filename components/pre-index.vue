<template>
  <div class="pre-index">
    <div id="animation" @click="changeAnimation"></div>
    <Button
      :class="isShow ? 'show' : ''"
      type="success"
      class="enter-btn"
      @click.stop="$emit('hide')"
      >云时光艺术空间</Button
    >
    <div v-if="!isShow" class="text">
      <span>云</span>
      <span>时</span>
      <span>光</span>
      <span>艺</span>
      <span>术</span>
      <span>空</span>
      <span>间</span>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import * as mChange from 'matrixchange'
import { aniList } from '@/config'
import { IsPC } from '@/utils'
export default Vue.extend({
  data() {
    return {
      animation: null,
      isShow: false,
      isPC: IsPC()
    }
  },
  mounted() {
    this.initAnimation()
    this.changeAnimation()
    setTimeout(() => (this.isShow = true), 4000)
  },
  methods: {
    initAnimation() {
      const animateDom = document.getElementById('animation')
      const images = this.isPC
        ? [
            require('../assets/pre-index/pc/1.jpg'),
            require('../assets/pre-index/pc/2.jpg'),
            require('../assets/pre-index/pc/3.jpg'),
            require('../assets/pre-index/pc/4.jpg'),
            require('../assets/pre-index/pc/5.jpg'),
            require('../assets/pre-index/pc/6.jpg')
          ]
        : [
            require('../assets/pre-index/phone/1.jpg'),
            require('../assets/pre-index/phone/2.jpg'),
            require('../assets/pre-index/phone/3.jpg'),
            require('../assets/pre-index/phone/4.jpg')
          ]
      this.animation = mChange.makeMatrixChange(animateDom, {
        images: images,
        row: 7,
        col: 9
      })
    },
    changeAnimation() {
      console.log('changeAnimation')
      const randomMode = Math.floor(mChange.mode.length * Math.random())
      const randomIn = Math.floor(aniList.length * Math.random())
      const randomOut = Math.floor(aniList.length * Math.random())
      this.animation.movePoint(mChange.mode[randomMode], {
        classNameIn: `animated ${aniList[randomIn]}`,
        classNameOut: `animated ${aniList[randomOut]}`
      })
    }
  }
})
</script>

<style lang="scss" scoped>
.pre-index {
  z-index: 9999;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: black;
  #animation {
    width: 100%;
    height: 100%;
  }
  .enter-btn {
    opacity: 0;
    z-index: 10000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    &.show {
      animation: show 2s;
      opacity: 100;
    }
  }

  // 按钮显示动画
  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 100;
    }
  }

  // 烟雾效果css
  span {
    font-size: 50px;
    display: inline-block;
    text-shadow: 0 0 0 whitesmoke;
    -webkit-animation: smoky 4s 2s both;
    animation: smoky 4s 2s both;
  }

  .text {
    z-index: 10001;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    margin: auto;
    text-align: center;
    color: transparent;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  span:nth-child(even) {
    -webkit-animation-name: smoky-mirror;
    animation-name: smoky-mirror;
  }

  @-webkit-keyframes smoky {
    60% {
      text-shadow: 0 0 40px whitesmoke;
    }

    to {
      -webkit-transform: translate3d(240px, -128px, 0) rotate(-40deg)
        skewX(70deg) scale(1.5);
      transform: translate3d(240px, -128px, 0) rotate(-40deg) skewX(70deg)
        scale(1.5);
      text-shadow: 0 0 20px whitesmoke;
      opacity: 0;
    }
  }

  @keyframes smoky {
    60% {
      text-shadow: 0 0 40px whitesmoke;
    }

    to {
      -webkit-transform: translate3d(240px, -128px, 0) rotate(-40deg)
        skewX(70deg) scale(1.5);
      transform: translate3d(240px, -128px, 0) rotate(-40deg) skewX(70deg)
        scale(1.5);
      text-shadow: 0 0 20px whitesmoke;
      opacity: 0;
    }
  }

  @-webkit-keyframes smoky-mirror {
    60% {
      text-shadow: 0 0 40px whitesmoke;
    }

    to {
      -webkit-transform: translate3d(288px, -128px, 0) rotate(-40deg)
        skewX(-70deg) scale(2);
      transform: translate3d(288px, -128px, 0) rotate(-40deg) skewX(-70deg)
        scale(2);
      text-shadow: 0 0 20px whitesmoke;
      opacity: 0;
    }
  }

  @keyframes smoky-mirror {
    60% {
      text-shadow: 0 0 40px whitesmoke;
    }

    to {
      -webkit-transform: translate3d(288px, -128px, 0) rotate(-40deg)
        skewX(-70deg) scale(2);
      transform: translate3d(288px, -128px, 0) rotate(-40deg) skewX(-70deg)
        scale(2);
      text-shadow: 0 0 20px whitesmoke;
      opacity: 0;
    }
  }

  span:nth-of-type(1) {
    -webkit-animation-delay: 2.1s;
    animation-delay: 2.1s;
  }

  span:nth-of-type(2) {
    -webkit-animation-delay: 2.2s;
    animation-delay: 2.2s;
  }

  span:nth-of-type(3) {
    -webkit-animation-delay: 2.3s;
    animation-delay: 2.3s;
  }

  span:nth-of-type(4) {
    -webkit-animation-delay: 2.4s;
    animation-delay: 2.4s;
  }

  span:nth-of-type(5) {
    -webkit-animation-delay: 2.5s;
    animation-delay: 2.5s;
  }

  span:nth-of-type(6) {
    -webkit-animation-delay: 2.6s;
    animation-delay: 2.6s;
  }

  span:nth-of-type(7) {
    -webkit-animation-delay: 2.7s;
    animation-delay: 2.7s;
  }

  span:nth-of-type(8) {
    -webkit-animation-delay: 2.8s;
    animation-delay: 2.8s;
  }

  span:nth-of-type(9) {
    -webkit-animation-delay: 2.9s;
    animation-delay: 2.9s;
  }

  span:nth-of-type(10) {
    -webkit-animation-delay: 3s;
    animation-delay: 3s;
  }

  span:nth-of-type(11) {
    -webkit-animation-delay: 3.1s;
    animation-delay: 3.1s;
  }

  span:nth-of-type(12) {
    -webkit-animation-delay: 3.2s;
    animation-delay: 3.2s;
  }
}
</style>
