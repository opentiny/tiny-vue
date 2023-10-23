<template>
  <div>
    <tiny-carousel height="150px" @change="handleChange">
      <tiny-carousel-item class="carousel-item-demo" v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </tiny-carousel-item>
    </tiny-carousel>

    <div class="carousel-tip">当前幻灯片索引：{{ curValue }}，上一张幻灯片索引：{{ preValue }}</div>
  </div>
</template>

<script>
import { Carousel, CarouselItem } from '@opentiny/vue'

export default {
  components: {
    TinyCarousel: Carousel,
    TinyCarouselItem: CarouselItem
  },
  data() {
    return {
      curValue: 0,
      preValue: 0
    }
  },
  methods: {
    handleChange(value, oldValue) {
      this.curValue = value
      this.preValue = oldValue
    }
  }
}
</script>

<style scoped>
.carousel-item-demo:nth-child(2n) {
  background-color: #99a9bf;
}

.carousel-item-demo:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.carousel-tip {
  margin: 16px 0 0;
  text-align: center;
}
</style>
