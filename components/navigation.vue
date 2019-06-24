<template>
  <div :class="!isPC ? 'mobile' : ''">
    <div class="logo">
      <img src="../assets/footer/6.jpg" alt="云时光艺术空间" />
      <span>云时光艺术空间</span>
    </div>
    <div class="menu">
      <Menu mode="horizontal" theme="light" active-name="1">
        <MenuItem name="1">
          <Icon type="ios-paper" />
          首页
        </MenuItem>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-people" />
            解读云时光
          </template>
          <MenuItem name="2-1">企业简介</MenuItem>
          <MenuItem name="2-1">核心优势</MenuItem>
          <MenuItem name="2-1">致家长信</MenuItem>
        </Submenu>
        <Submenu v-if="isPC" name="4">
          <template slot="title">
            <Icon type="ios-construct" />
            课程简介
          </template>
          <MenuItem name="4-1">课程解析</MenuItem>
          <MenuItem name="4-2">阶段学习</MenuItem>
        </Submenu>
        <Submenu v-if="isPC" name="5">
          <template slot="title">
            <Icon type="ios-construct" />
            主题活动
          </template>
          <MenuItem name="5-1">活动通知</MenuItem>
          <MenuItem name="5-2">亲子活动</MenuItem>
          <MenuItem name="5-3">家长艺术沙龙</MenuItem>
        </Submenu>
        <MenuItem name="6">
          <Icon type="ios-albums" />
          我的作品
        </MenuItem>
        <!-- <MenuItem name="7">
        <Icon type="ios-baseball" />
        试听课预约
        </MenuItem> -->
        <MenuItem name="8">
          <Icon type="ios-beer" />
          联系我们
        </MenuItem>
      </Menu>
    </div>
    <div class="call">
      <a href="tel:13127752060">
        <Icon type="ios-call" :size="isPC ? 50 : 20" />
        13127752060
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isPC: this.$store.state.isPC
    }
  }
}
</script>
<style scoped lang="scss">
.mobile {
  .logo {
    position: absolute;
    top: 5px;
    left: 20px;
  }
  .call {
    position: absolute;
    top: 40px;
    right: 20px;
  }
  .menu {
    margin-top: 100px;
  }
}
.logo {
  display: inline-block;
  img {
    width: 100px;
    height: 100px;
    margin-right: 10px;
  }
  span {
    line-height: 100px;
    vertical-align: text-bottom;
  }
}
.menu,
.call {
  display: inline-block;
}
.call {
  font-size: 20px;
  margin-bottom: 10px;
  vertical-align: bottom;
}
</style>
