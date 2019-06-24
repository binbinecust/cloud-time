<template>
  <div>
    <div v-if="!isShow">
      <Carousel
        v-model="index"
        class="carousel"
        :autoplay-speed="4000"
        autoplay
        loop
      >
        <CarouselItem class="item">
          <div>
            <img src="../assets/slider/a.jpg" alt="" />
          </div>
        </CarouselItem>
        <CarouselItem class="item">
          <div>
            <img src="../assets/slider/b.jpg" alt="" />
          </div>
        </CarouselItem>
        <CarouselItem class="item">
          <div>
            <img src="../assets/slider/c.jpg" alt="" />
          </div>
        </CarouselItem>
        <CarouselItem class="item">
          <div>
            <img src="../assets/slider/d.jpg" alt="" />
          </div>
        </CarouselItem>
        <CarouselItem class="item">
          <div>
            <img src="../assets/slider/e.jpg" alt="" />
          </div>
        </CarouselItem>
      </Carousel>
      <div class="content">
        <div class="activitys">
          <div
            v-for="(activity, actIndex) in activitys"
            :key="actIndex"
            class="activity"
          >
            <img :src="activity.img" alt="" />
            <div>{{ activity.txt }}</div>
            <div>{{ activity.des }}</div>
          </div>
        </div>
      </div>
      <footer>
        <div class="contact">
          <div class="contact-body">
            <div class="left">
              <div class="logo">
                <img src="../assets/footer/6.jpg" alt="" />
                <span>云时光艺术空间</span>
              </div>
              <div>联系电话：<a href="tel:+13127752060">13127752060</a></div>
              <div>
                邮箱：<a href="mailto:cloudtimes2019@163.com"
                  >cloudtimes2019@163.com</a
                >
              </div>
              <div>
                地址：<a
                  href="//www.amap.com/place/B000A81I1W"
                  rel="noopener norefferrer"
                  target="_blank"
                  >北京市海淀区清河街道水木天成小区底商</a
                >
              </div>
            </div>
            <div class="right">
              <img src="../assets/footer/binbin.jpeg" alt="云时光艺术空间" />
              <p>关注我们</p>
            </div>
          </div>
          <div class="copyright">
            Copyright © 2019-{{ year }} 云时光艺术空间 | 京ICP备19016270号-2
          </div>
        </div>
      </footer>
    </div>
    <pre-index v-if="isShow" @hide="hidePreIndex"></pre-index>
  </div>
</template>
<script>
import PreIndex from '@/components/pre-index.vue'
export default {
  components: {
    PreIndex
  },
  data() {
    return {
      year: new Date().getFullYear(),
      index: 0,
      isShow: true,
      activitys: [
        {
          img: require('@/assets/activitys/a.jpg'),
          txt: '面包屑1',
          des: '我是孟大宝'
        },
        {
          img: require('@/assets/activitys/a.jpg'),
          txt: '面包屑2',
          des: '我是彬大宝'
        },
        {
          img: require('@/assets/activitys/a.jpg'),
          txt: '面包屑3',
          des: '我是孟大宝'
        },
        {
          img: require('@/assets/activitys/a.jpg'),
          txt: '面包屑4',
          des: '我是彬大宝'
        }
      ]
    }
  },
  methods: {
    hidePreIndex() {
      this.isShow = false
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 0;
  .activity {
    flex: 1;
    text-align: center;
    display: inline-block;
    margin-right: 50px;
    img {
      height: 90px;
    }
    &:last-child {
      margin-right: 0;
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
</style>
