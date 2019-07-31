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
            <img src="@/assets/slider/a.jpg" alt="" />
          </div>
        </CarouselItem>
        <CarouselItem class="item">
          <div>
            <img src="@/assets/slider/b.jpg" alt="" />
          </div>
        </CarouselItem>
        <CarouselItem class="item">
          <div>
            <img src="@/assets/slider/c.jpg" alt="" />
          </div>
        </CarouselItem>
        <CarouselItem class="item">
          <div>
            <img src="@/assets/slider/d.jpg" alt="" />
          </div>
        </CarouselItem>
        <CarouselItem class="item">
          <div>
            <img src="@/assets/slider/e.jpg" alt="" />
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
          img: '',
          txt: 'test',
          des: 'test'
        }
      ]
    }
  },
  mounted() {
    this.isShow = !this.$route.query.showPre
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
</style>
