<template>
  <div class="interpretation">
    <div class="bg">
      解读云时光
    </div>
    <div class="modules">
      <div class="module">
        <div class="module-title">
          <div>企业简介</div>
        </div>
        <div class="module-content">
          云时光艺术工作室提供全年龄段的专业美术教育，为学生创造一个充满尊重和鼓励的艺术氛围，旨在打造一所“属于孩子的艺术大学”。由毕业于鲁迅美术学院的两名优秀师资联合创办，致力于培养学生去感知美、发现美、鉴赏美和创造美的能力，以美启真，以美储善。用艺术教育与着眼于知、关乎着真的科学教育及着眼于意、关乎着善的伦理教育有机融合，培养学生在未来的发展中具有一个高贵的灵魂和获得人生真正幸福的能力，让孩子在真正属于自己的创作过程中不断进行自我对话，发现自己的特点，确认自己的价值、建立自信，坚定地应对未来的各种挑战。
        </div>
      </div>
      <div class="module">
        <div class="module-title">
          <div>教学理念</div>
        </div>
        <div class="module-content">
          根据儿童生理发展、心理发展、认知发展和儿童绘画
          发展规律，以“人文精神、创新能力、审美品位、艺术素养”为核心，以艺术为载体，全面提升孩子
          的综合素养与创造性思维能力，用艺术塑造灵魂，培养未来社会的创造性人才。
        </div>
      </div>
      <div class="module">
        <div class="module-title">
          <div>教学体系</div>
        </div>
        <div class="module-content">
          将大量一线教学实践与国内外先进教育理念的融合贯通，历经多年的心血研发，自主研发出一套适合当下国内少儿美术教育的课程，内容涵盖
          4-16
          岁青少年儿童的美术教学体系，分为六大科目：彩画基础、彩画中级、彩画
          综合、国画、趣味素描、少年大师班
        </div>
      </div>
      <div class="module">
        <div class="module-title">
          <div>教学目标</div>
        </div>
        <div class="module-content">
          <p>
            短期效果：可以让孩子的艺术表现力加强，会运用各种材料表达情感与思想。可以让孩子在小学、中
            学甚至高中的美术课中，完成高质量的作品。
          </p>
          <p>
            长期效果：培养具备艺术素养的年轻人，有艺术气质有较高审美能力，富有生活情趣的人。
          </p>
        </div>
      </div>
      <div class="module">
        <div class="module-title">
          <div>教学特色</div>
        </div>
        <div class="module-content">
          <p>小班教学授课制教学，营造温馨学习氛围</p>
          <p>
            递进式学习安排，多方向发展选择，为兴趣找到落脚点
          </p>
          <p>
            季节性课外写生，主体性手工活动，为生活插上艺术翅膀
          </p>
          <p>
            提供各类型全国性、区域性比赛机会，分享品味，见证实力。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {}
  },
  methods: {}
})
</script>

<style lang="scss" scoped>
.interpretation {
  text-align: left;
  .bg {
    background: pink;
    height: 500px;
    text-align: center;
    line-height: 500px;
    font-size: 48px;
    font-weight: 600;
    color: white;
  }
  .modules {
    padding: 0 20px;
    font-size: 28px;
    .module-content {
      margin-top: 20px;
      text-indent: 2em;
      line-height: 62px;
    }
  }
}

.module {
  padding-top: 40px;

  &-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 40px;
    color: #303033;
    text-align: left;
    padding-left: 10px;
    font-weight: 500;
    position: relative;

    &::before {
      position: absolute;
      content: '';
      top: 18px;
      height: 30px;
      width: 0px;
      left: 0px;
      border-left: 4px solid #e60000;
    }
  }
}
</style>
