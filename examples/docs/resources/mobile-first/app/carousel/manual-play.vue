<template>
  <div>
    <tiny-carousel height="150px" ref="carousel" :initial-index="index - 1">
      <tiny-carousel-item :class="bgColor[item - 1]" v-for="item in 4" :key="item" :name="'幻灯片 - ' + item">
        <h3>{{ item }}</h3>
      </tiny-carousel-item>
    </tiny-carousel>
    <label for="num">切换到</label>
    <tiny-numeric id="num" v-model="index" @change="indexChange" :min="1" :max="4"></tiny-numeric>
    <tiny-button-group>
      <tiny-button type="primary" @click="prev">上一张</tiny-button>
      <tiny-button type="primary" @click="next">下一张</tiny-button>
    </tiny-button-group>
  </div>
</template>

<script>
import { Carousel, CarouselItem, Numeric, Button, ButtonGroup } from '@opentiny/vue'

export default {
  components: {
    TinyCarousel: Carousel,
    TinyCarouselItem: CarouselItem,
    TinyNumeric: Numeric,
    TinyButton: Button,
    TinyButtonGroup: ButtonGroup
  },
  data() {
    return {
      index: 3,
      bgColor: [
        'bg-color-info-primary-subtle',
        'bg-color-success-subtle',
        'bg-color-icon-primary',
        'bg-color-warning-subtle'
      ]
    }
  },
  methods: {
    indexChange(newVal) {
      // 幻灯片从 0 开始
      this.$refs.carousel.setActiveItem(newVal - 1)
      // 也可以使用 name 去做为跳转参数
    },
    next() {
      this.index = Math.min(this.index + 1, 4)
      this.$refs.carousel.next()
    },
    prev() {
      this.index = Math.max(this.index - 1, 0)
      this.$refs.carousel.prev()
    }
  }
}
</script>
