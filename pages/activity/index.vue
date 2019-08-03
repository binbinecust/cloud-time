<template>
  <div class="activities main">
    <div
      v-for="activity in activities"
      :key="activity.catalog"
      class="module-wrapper"
    >
      <div class="title">
        <div class="left">
          <Icon type="ios-leaf" />
          <h2 class="title-name">{{ activity.name }}</h2>
        </div>
        <Button type="info" class="say-btn" @click="viewBoard(activity.name)"
          >我想说</Button
        >
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
    <Modal
      v-model="showModel"
      width="600"
      :closable="false"
      class-name="activity-model"
    >
      <div
        v-if="curViewPic"
        style="text-align:center; width:500px;display:inline-block;"
      >
        <img :src="curViewPic" alt="" style="width:100%;" />
      </div>
      <div v-else>
        <p slot="header" class="activity-model-header">
          {{ curActivity }}活动留言板
        </p>
        <div class="activity-model-input">
          <Input
            v-model="text"
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 5 }"
            placeholder="Enter something..."
          />
        </div>

        <Button type="info" @click="confirmText">确定</Button>
        <div v-if="historyText.length" class="minH300">
          <Divider>历史留言</Divider>
          <div class="minH300">
            <p v-for="(item, index) in historyText" :key="index">
              {{ index + 1 }}.&nbsp;&nbsp;&nbsp;{{ item }}
            </p>
          </div>
        </div>
        <div v-else class="no-text">
          <Divider>暂无留言，快来抢沙发吧！</Divider>
        </div>
      </div>
      <div slot="footer">
        <Button type="info" @click="confirm">关闭</Button>
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
      curViewPic: '',
      text: '',
      historyText: [],
      curActivity: ''
    }
  },
  methods: {
    viewPic(item) {
      this.showModel = true
      this.curViewPic = item.url.replace(/-small/, '')
    },
    confirm() {
      this.showModel = false
      this.curViewPic = ''
    },
    viewBoard(name) {
      this.curActivity = name
      this.showModel = true
    },
    confirmText() {
      this.historyText.push(this.text)
      this.text = ''
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

.activity-model {
  .activity-model-header {
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 700;
  }
  .activity-model-input {
    width: 80%;
    margin-right: 20px;
    display: inline-block;
  }
  .minH300 {
    min-height: 300px;
    p {
      margin-bottom: 15px;
      text-align: left;
    }
  }
  .no-text {
    margin: 150px 0;
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
    .left {
      display: inline;
    }
    .say-btn {
      margin-right: 35px;
      float: right;
    }
  }
  .img-wrapper {
    width: 210px;
    display: inline-block;
    margin-right: 20px;
    margin-bottom: 10px;
    text-align: center;
    overflow: hidden;
    img {
      transition: all 0.4s linear;
      height: 200px;
    }
    &:hover img {
      -ms-transform: scale(1.2);
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
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
