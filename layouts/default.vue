<template>
  <div class="layout-default">
    <main>
      <navigation v-show="show"></navigation>
      <nuxt />
      <footer-com v-show="show"></footer-com>
    </main>
  </div>
</template>
<script>
import navigation from '@/components/navigation'
import footerCom from '@/components/footer.vue'
export default {
  components: {
    navigation,
    footerCom
  },
  data() {
    return {
      show: false
    }
  },
  mounted() {
    this.show = !/(login|config)/.test(this.$route.fullPath)
  }
}
</script>

<style lang="scss">
@import '@/assets/style/global.scss';
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  font-display: swap;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  text-align: center;
}
body {
  // margin-top: 20px;
  cursor: url('https://bibidaodao.cn/assets/album/cat.ico'), auto;
  // background: linear-gradient(#e0eafc, #cfdef3);
}
.layout-default {
  margin-top: 20px;
}

/* *,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
} */
</style>
