<template>
  <div class="footer">
    <footer>
      <div class="contact">
        <div class="contact-body">
          <div class="left">
            <div class="logo">
              <img src="../assets/footer/6.jpg" alt="" />
              <span>云时光艺术工作室</span>
            </div>
            <div>联系电话：<a href="tel:+13127752060">13127752060</a></div>
            <div>
              邮箱：<a href="mailto:cloudtimes2019@163.com"
                >cloudtimes2019@163.com</a
              >
            </div>
            <div>
              地址：<a
                href="https://j.map.baidu.com/fc/2ac"
                rel="noopener norefferrer"
                target="_blank"
                >北京市海淀区后屯南路26号专家国际公馆3楼323室</a
              >
            </div>
          </div>
          <div class="right">
            <img src="../assets/footer/binbin.jpeg" alt="云时光艺术工作室" />
            <p>关注我们</p>
          </div>
        </div>
        <div class="copyright">
          Copyright © 2019-{{ year }} 云时光艺术工作室 | 京ICP备19016270号-2
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      year: new Date().getFullYear()
    }
  },
  methods: {
    // ======================事件处理函数======================
    // ======================业务逻辑函数======================
    // ========================纯函数=========================
    // ======================网络请求函数======================
    // =======================初始化函数=======================
  }
})
</script>

<style lang="scss" scoped>
.footer {
  .contact {
    color: white;
    background: #222529;
    padding: 50px;
    .contact-body {
      display: flex;
      justify-content: space-between;
      .left {
        text-align: left;
        > * {
          margin-bottom: 5px;
        }
        .logo {
          display: flex;
          align-items: center;
        }
        img {
          width: 100px;
          height: 100px;
          margin-right: 20px;
          margin-bottom: 10px;
        }
      }
      .right {
        text-align: right;
        img {
          width: 100px;
          height: 120px;
        }
        p {
          width: 100%;
          text-align: center;
        }
        * {
          margin-bottom: 5px;
        }
      }
    }
  }
}
</style>
