<template>
  <div class="teacher-introduction main">
    <Tabs>
      <TabPane label="卢婷婷">
        <div class="img-wrapper">
          <img
            src="../assets/img/lutingting.jpeg"
            alt="卢婷婷"
            @click="viewPic('lu')"
          />
          <p class="name">卢婷婷</p>
          <Tag color="warning">专业能力强</Tag>
          <Tag color="blue">因材施教</Tag>
          <Tag color="pink">课堂互动性强</Tag>
        </div>
        <div class="tab-content">
          <div class="part">
            <h2>个人简介</h2>
            <p>2009年考入鲁迅美术学院(大连校区)；</p>
            <p>2012年荣获“东方地毯杯”第七届中国家纺手工精品创意大赛金奖；</p>
            <p>2013年毕业于鲁迅美术学院装饰艺术设计系</p>
            <p>2013-2014年从事软装饰—壁纸设计师</p>
            <p>2015年从事少儿美术教育至今</p>
            <p>2017年创办北京云·时光艺术工作室</p>
            <p>
              2018年带领学员参加第十届FindColor寻彩少儿书画大赛，共47幅作品参赛，荣获特别金奖3名，金奖9名，银奖11名，铜奖11名，优秀奖13名。卢婷婷老师荣获集体辅导金奖；云·时光艺术工作室荣获“百佳美育名校”
            </p>
            <p>
              2018年带领学员参加海淀区科技幻想画比赛、海淀艺术节，获得优异成绩；
            </p>
            <p>
              2018年参加清华大学美术学院李海霞唯美工笔画研修班；作品《千年古韵》入围中国美术家协会――南粤之光·全国中国画作品展
            </p>
            <p>2019年参加“人文清华”讲坛—常莎娜《永远的敦煌》</p>
            <p>
              2019年带领学员参加国内最权威的平台-中国美术家协会举办的首届全国少儿美术作品展，学员徐翎腾的作品《我爱爬长城》入选，作品于6月15日在北京时代美术馆展出。
            </p>
            <p>
              2019年受邀参加世界华人美术教育学会主席—陈怡倩博士的STAEAM课程研修并取得结业证书，所设计的《会画画可以成为什么样的人》STEAM系列课受陈怡倩博士的肯定，并把其中两位学员的作品作为示范选入她在泰国诗大艺术学院演讲的课例中。
            </p>
          </div>
          <div class="part">
            <h2>获奖证书</h2>
            <div class="awards">
              <div
                v-for="(item, index) in awards"
                :key="index"
                @click="viewPic(item)"
              >
                <img :src="item" alt="" />
              </div>
            </div>
          </div>
        </div>
      </TabPane>
      <TabPane label="孟汐">
        <div class="img-wrapper">
          <img
            src="../assets/img/mengxi.jpeg"
            alt="孟汐"
            @click="viewPic('meng')"
          />
          <p class="name">孟汐</p>
        </div>
        <div class="tab-content">
          <p>2008年考入鲁迅美术学院(大连校区)；</p>
        </div>
      </TabPane>
    </Tabs>
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
export default Vue.extend({
  data() {
    return {
      showModel: false,
      awards: [
        require('../assets/img/t1.jpeg'),
        require('../assets/img/t2.jpeg'),
        require('../assets/img/t3.jpeg'),
        require('../assets/img/t4.jpeg')
      ],
      curViewPic: ''
    }
  },
  methods: {
    // ======================事件处理函数======================
    viewPic(item) {
      this.showModel = true
      if (item === 'lu') {
        this.curViewPic = require('../assets/img/lutingting.jpeg')
      } else if (item === 'meng') {
        this.curViewPic = require('../assets/img/mengxi.jpeg')
      } else {
        this.curViewPic = item
      }
    },
    confirm() {
      this.showModel = false
    }
    // ======================业务逻辑函数======================
    // ========================纯函数=========================
    // ======================网络请求函数======================
    // =======================初始化函数=======================
  }
})
</script>

<style lang="scss" scoped>
.ivu-tabs {
  text-align: left;
}
.ivu-tabs-tabpane {
  padding-top: 40px;
}
.ivu-tag {
  font-size: 18px;
  line-height: 24px;
  height: 24px;
}
.name {
  text-align: center;
  font-size: 20px;
  font-weight: 700;
}
.teacher-introduction {
  .tab-content {
    display: inline-block;
    font-size: 18px;
    text-align: left;
    max-width: 1050px;
  }
  .img-wrapper {
    vertical-align: top;
    display: inline-block;
    width: 300px;
    padding: 10px;
    margin-right: 40px;
    img {
      width: 100%;
    }
  }

  .part {
    h2 {
      margin-bottom: 20px;
    }
    &:nth-child(2) {
      h2 {
        margin-top: 20px;
      }
    }
    .awards {
      > div {
        height: 200px;
        display: inline-block;
        margin-right: 30px;
        img {
          height: 100%;
        }
      }
      > div:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
