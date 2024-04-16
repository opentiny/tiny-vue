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
.tiny-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
  font-size: 25px;
}

.carousel-item-demo:nth-child(2n) {
  background-color: #fafafa;
}

.carousel-item-demo:nth-child(2n + 1) {
  background-color: #edf0f3;
}
.carousel-tip {
  margin: 16px 0 0;
  text-align: center;
}
</style>
