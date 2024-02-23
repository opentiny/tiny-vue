<template>
  <div>
    <tiny-carousel height="150px" @change="handleChange">
      <tiny-carousel-item :class="bgColor[item - 1]" v-for="item in 4" :key="item">
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
      preValue: 0,
      bgColor: [
        'bg-color-info-primary-subtle',
        'bg-color-success-subtle',
        'bg-color-icon-primary',
        'bg-color-warning-subtle'
      ]
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
.carousel-tip {
  margin: 16px 0 0;
  text-align: center;
}
</style>
