<template>
  <div class="activities main">
    <div
      v-for="activity in activities"
      :key="activity.catalog"
      class="module-wrapper"
    >
      <div class="title">
        <Icon type="ios-leaf" />
        <h2>{{ activity.name }}</h2>
      </div>
      <div class="imgs">
        <Card
          v-for="(imgItem, index) in activity.imgs"
          :key="index"
          class="img-wrapper"
          :class="imgItem.rotate ? 'rotate' : ''"
        >
          <div class="img">
            <img :src="imgItem.url" alt="" @click="viewPic(imgItem)" />
          </div>
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
import activities from './activities.config'
export default Vue.extend({
  data() {
    return {
      activities: activities,
      showModel: false,
      curViewPic: ''
    }
  },
  methods: {
    viewPic(item) {
      this.showModel = true
      this.curViewPic = item.url.replace(/-small/, '')
    },
    confirm() {
      this.showModel = false
    }
  }
})
</script>
<style lang="scss">
.activities {
  .rotate {
    vertical-align: top;
    .ivu-card-body {
      padding: 0;
      height: 240px;
      .img {
        height: 240px;
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
.activities {
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
    p {
      text-indent: 0;
      text-align: center;
    }
    p:nth-of-type(2) {
      span:first-child {
        margin-right: 10px;
      }
    }
  }
}
</style>
