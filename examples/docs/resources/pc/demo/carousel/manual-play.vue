<template>
  <div>
    <tiny-carousel height="150px" ref="carousel" :initial-index="index - 1" @change="handleChange">
      <tiny-carousel-item class="carousel-item-demo" v-for="item in 8" :key="item" :name="'幻灯片 - ' + item">
        <h3>{{ item }}</h3>
      </tiny-carousel-item>
    </tiny-carousel>
    <label for="num">切换到</label>
    <tiny-numeric id="num" v-model="index" @change="indexChange" :min="1" :max="8"></tiny-numeric>
    <tiny-button-group>
      <tiny-button type="primary" @click="prev" :disabled="index === 1"> 上一张 </tiny-button>
      <tiny-button type="primary" @click="next" :disabled="index === 8"> 下一张 </tiny-button>
    </tiny-button-group>
  </div>
</template>

<script lang="jsx">
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
      index: 3
    }
  },
  methods: {
    indexChange(newVal) {
      // 幻灯片从 0 开始
      this.$refs.carousel.setActiveItem(newVal - 1)
      // 也可以使用 name 去做为跳转参数
    },
    next() {
      this.index = Math.min(this.index + 1, 8)
      this.$refs.carousel.next()
    },
    prev() {
      this.index = Math.max(this.index - 1, 0)
      this.$refs.carousel.prev()
    },
    handleChange(newVal) {
      if (newVal >= 0) {
        this.index = newVal + 1
      }
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
</style>
