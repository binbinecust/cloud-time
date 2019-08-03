<template>
  <div class="works main">
    <div
      v-for="catalog in catalogs"
      :key="catalog.catalog"
      class="module-wrapper"
    >
      <div class="title">
        <Icon type="ios-leaf" />
        <h2 class="title-name">{{ catalog.name }}</h2>
      </div>
      <div class="imgs">
        <Card
          v-for="(work, index) in catalog.imgs"
          :key="index"
          class="img-wrapper"
          :class="work.rotate ? 'rotate' : ''"
        >
          <div class="img">
            <img :src="work.url" alt="" />
            <div class="overlay">
              <p>作品名：{{ work.workName || '未命名' }}</p>
              <p>作者：{{ work.student || '未知' }}</p>
              <p>年龄：{{ work.age || '未知' }}</p>
              <p>
                <Rate v-model="work.rate" show-text allow-half disabled>
                  <span style="color: #f5a623">{{ work.rate }}</span>
                </Rate>
              </p>
              <a class="info" @click="viewPic(work)">查看大图</a>
            </div>
          </div>
        </Card>
      </div>
    </div>
    <Modal v-model="showModel" width="600" :closable="false">
      <div style="text-align:center; width:500px;display:inline-block;">
        <img :src="curViewPic" alt="" style="width:100%;" />
      </div>
      <div slot="footer">
        <Button type="info" @click="confirm">关闭</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import Vue from 'vue'
import catalogs from './works.config'
export default Vue.extend({
  data() {
    return {
      catalogs: catalogs,
      showModel: false,
      curViewPic: ''
    }
  },
  methods: {
    viewPic(work) {
      this.showModel = true
      this.curViewPic = work.url.replace(/-small/, '')
    },
    confirm() {
      this.showModel = false
    }
  }
})
</script>
<style lang="scss">
.works {
  .rotate {
    vertical-align: top;
    .ivu-card-body {
      padding: 0;
      .img {
        line-height: 240px;
        * {
          line-height: 1.5;
        }
        img {
          vertical-align: middle;
          width: 100%;
          height: auto !important;
        }
      }
    }
  }

  .ivu-rate-text {
    vertical-align: text-top;
  }
}
</style>

<style lang="scss" scoped>
.works {
  .imgs {
    width: 100%;
    text-align: left;
  }
  .title {
    margin-bottom: 20px;
  }
  .img-wrapper {
    width: 210px;
    display: inline-block;
    margin-right: 20px;
    margin-bottom: 10px;
    text-align: center;
    overflow: hidden;
    img {
      height: 200px;
    }
    // p {
    //   text-indent: 0;
    //   text-align: center;
    // }
    // p:nth-of-type(2) {
    //   span:first-child {
    //     margin-right: 10px;
    //   }
    // }
  }

  // animation

  .img {
    .overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      opacity: 0;
      background-color: rgba(0, 0, 0, 0.5);
      -webkit-transition: all 0.4s ease-in-out;
      transition: all 0.4s ease-in-out;
      p {
        text-transform: uppercase;
        color: #fff;
        text-align: center;
        position: relative;
        font-size: 17px;
        -webkit-transform: translatey(-100px);
        -ms-transform: translatey(-100px);
        transform: translatey(-100px);
        -webkit-transition: all 0.2s ease-in-out;
        transition: all 0.2s ease-in-out;
        padding-top: 10px;
      }
      a.info {
        text-decoration: none;
        display: inline-block;
        text-transform: uppercase;
        color: #fff;
        border: 1px solid #fff;
        background-color: transparent;
        opacity: 0;
        filter: alpha(opacity=0);
        -webkit-transition: all 0.2s ease-in-out;
        transition: all 0.2s ease-in-out;
        margin: 30px 0 0;
        padding: 7px 14px;
        &:hover {
          box-shadow: 0 0 5px #fff;
        }
      }
    }

    img {
      -webkit-transition: all 0.4s linear;
      transition: all 0.4s linear;
    }
    &:hover {
      .overlay {
        opacity: 1;
        p,
        a.info {
          opacity: 1;
          filter: alpha(opacity=100);
          -ms-transform: translatey(0);
          -webkit-transform: translatey(0);
          transform: translatey(0);
        }
        a.info {
          -webkit-transition-delay: 0.2s;
          transition-delay: 0.2s;
        }
      }
      img {
        -ms-transform: scale(1.2);
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
      }
    }
  }
}
</style>
