<template>
  <div class="works main">
    <div
      v-for="catalog in catalogs"
      :key="catalog.catalog"
      class="module-wrapper"
    >
      <div class="title">
        <Icon type="ios-leaf" />
        <h2>{{ catalog.name }}</h2>
      </div>
      <div class="imgs">
        <Card
          v-for="(work, index) in catalog.imgs"
          :key="index"
          class="img-wrapper"
          :class="work.rotate ? 'rotate' : ''"
        >
          <div class="img">
            <img :src="work.url" alt="" @click="viewPic(work)" />
          </div>
          <!-- <p>作品名：{{ work.workName || '未命名' }}</p>
          <p>
            <span>作者：{{ work.student || '未知' }}</span
            ><span>年龄：{{ work.age || '未知' }}</span>
          </p> -->
        </Card>
      </div>
    </div>
    <Modal v-model="showModel" width="600" :closable="false">
      <div style="text-align:center; width:500px;display:inline-block;">
        <img :src="curViewPic" alt="" style="width:100%;" />
      </div>
      <div slot="footer">
        <Button type="info" @click="confirm">确认</Button>
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
        img {
          vertical-align: middle;
          width: 100%;
          height: auto !important;
        }
      }
    }
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
}
</style>
