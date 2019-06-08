<template>
  <div>
    <Carousel
      class="carousel"
      v-model="index"
      :autoplay-speed="4000"
      autoplay
      loop
    >
      <CarouselItem class="item">
        <div>
          <img
            src="@/static/slider/a.jpg"
            alt=""
          >
        </div>
      </CarouselItem>
      <CarouselItem class="item">
        <div>
          <img
            src="@/static/slider/b.jpg"
            alt=""
          >
        </div>
      </CarouselItem>
      <CarouselItem class="item">
        <div>
          <img
            src="@/static/slider/c.jpg"
            alt=""
          >
        </div>
      </CarouselItem>
      <CarouselItem class="item">
        <div>
          <img
            src="@/static/slider/d.jpg"
            alt=""
          >
        </div>
      </CarouselItem>
      <CarouselItem class="item">
        <div>
          <img
            src="@/static/slider/e.jpg"
            alt=""
          >
        </div>
      </CarouselItem>
    </Carousel>
    <div class="content">
      <div class="activitys">
        <div
          v-for="activity in activitys"
          :key="activity.img"
          class="activity"
        >
          <img
            :src="activity.img"
            alt=""
          >
          <div>{{activity.txt}}</div>
          <div>{{activity.des}}</div>
        </div>
      </div>
    </div>
    <footer>
      <div class="contact">
        <div class="contact-body">
          <div class="left">
            <div class="logo">
              <img
                src="@/static/6.jpg"
                alt=""
              >
              <span>云时光艺术空间</span>
            </div>
            <div>联系电话：<a href="tel:+13127752060">13127752060</a></div>
            <div>邮箱：<a href="mailto:cloudtimes2019163.com">cloudtimes2019163.com</a></div>
            <div>地址：<a
                href="//www.amap.com/place/B000A81I1W"
                rel="noopener norefferrer"
                target="_blank"
              >北京市水木天成底商</a></div>
          </div>
          <div class="right">
            <img
              src="../static/index/wechat.svg"
              alt=""
            >
            <p>欢迎关注</p>
            <p>云时光艺术空间 公众号</p>
            <img
              src="../static/index/binbin.jpeg"
              alt="云时光艺术空间"
            >
          </div>
        </div>
        <div class="copyright">Copyright © 2019-{{year}} 云时光艺术空间 | 京ICP备19016270号-2</div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
      index: 0,
      activitys: [
        {
          img: require('@/static/activitys/a.jpg'),
          txt: '面包屑1',
          des: '我是孟大宝'
        },
        {
          img: require('@/static/activitys/b.jpg'),
          txt: '面包屑2',
          des: '我是彬大宝'
        },
        {
          img: require('@/static/activitys/c.jpg'),
          txt: '面包屑3',
          des: '我还是孟大宝'
        },
        {
          img: require('@/static/activitys/d.jpg'),
          txt: '面包屑4',
          des: '我还是彬大宝'
        }
      ]
    }
  }
}
</script>
<style scoped lang="scss">
.carousel {
  img {
    height: 500px;
  }
  .item {
    background: black;
  }
}
.content {
  margin: 0 auto;
}
.activitys {
  padding: 50px 0;
  .activity {
    width: 200px;
    text-align: center;
    display: inline-block;
    margin-right: 50px;
    img {
      height: 90px;
    }
  }
  &::after {
    margin-top: 50px;
    content: '';
    display: block;
    border-bottom: 1px solid #ccc;
  }
}
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
      }
    }
    .right {
      text-align: right;
      img:nth-of-type(1) {
        width: 41px;
        height: 34px;
      }
      img:nth-of-type(2) {
        width: 80px;
        height: 80px;
      }
      * {
        margin-bottom: 5px;
      }
    }
  }
}
</style>
