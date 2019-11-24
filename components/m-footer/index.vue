<template>
  <div class="footer">
    <footer>
      <div class="contact">
        <div class="contact-body">
          <div class="logo">
            <div class="logo-img">
              <!-- <img
                src="https://t.focus-res.cn/fe-node/assets/images/recognization.97e32b57.png"
                alt=""
              /> -->
            </div>
            <span>云时光艺术工作室</span>
          </div>
          <div class="info">
            <div>
              <div class="icon">
                <span class="iconfont">&#xe613;</span>
              </div>
              <div>
                联系电话：<a href="tel:010-62664552">010-62664552</a
                >&nbsp;或&nbsp;<a href="tel:18500945333">18500945333</a>
              </div>
            </div>
            <div>
              <div class="icon">
                <span class="iconfont">&#xe631;</span>
              </div>
              <div>
                邮箱：<a href="mailto:cloudtimes2019@163.com"
                  >cloudtimes2019@163.com</a
                >
              </div>
            </div>
            <div>
              <div class="icon">
                <span class="iconfont">&#xe63e;</span>
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
            <div>
              <div class="icon">
                <span class="iconfont">&#xe628;</span>
              </div>
              <div class="focus-us">
                <!-- <img src="../assets/img/binbin.jpeg" alt="云时光艺术工作室" /> -->
                <p>关注我们：</p>
                <div class="qrcode"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright">
        Copyright © 2019-{{ year }} 云时光艺术工作室 | 京ICP备19016270号-2
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
@import '@/assets/style/mixins.scss';
.footer {
  text-align: left;
  .contact {
    color: #ccc;
    background: #222529;
    padding: 20px;
    a {
      color: white;
    }
    .contact-body {
      .logo {
        font-size: 48px;
        font-weight: 600;
        margin-bottom: 20px;
        &-img {
          display: inline-block;
          width: 179px;
          height: 40px;
          background: pink;
        }
      }
      .info {
        font-size: 28px;
        // .left {
        //   flex: 1;
        //   margin-right: 20px;
        //   > div {
        //     margin-bottom: 10px;
        //   }
        // }

        // .right {
        //   width: 200px;
        //   .focus {
        //     text-align: center;
        //     margin-bottom: 10px;
        //   }
        //   .qrcode {
        //     width: 100%;
        //     height: 100px;
        //     background: pink;
        //   }
        // }
        > div {
          // background: #f5f5f6;
          padding: 15px 0 15px 15px;
          // margin-bottom: 15px;
          display: flex;
          align-items: center;
          .icon {
            width: 60px;
            height: 60px;
            // @include m-r1b(#515a6e, 50%);
            text-align: center;
            line-height: 60px;
            text-align: center;
            margin-right: 20px;
            .iconfont {
              font-size: 40px;
            }
          }
          .focus-us {
            display: flex;
            align-items: center;
            .qrcode {
              width: 200px;
              height: 200px;

              background: pink;
              display: inline-block;
            }
          }
        }
      }
    }
  }
  .copyright {
    background: #222529;
    // margin-top: 20px;
    text-align: center;
    padding-bottom: 20px;
    color: white;
  }
}
</style>
