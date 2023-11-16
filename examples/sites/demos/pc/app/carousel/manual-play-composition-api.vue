<template>
  <div>
    <tiny-carousel height="150px" ref="carouselRef" :initial-index="index - 1">
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

<script setup lang="jsx">
import { ref } from 'vue'
import {
  Carousel as TinyCarousel,
  CarouselItem as TinyCarouselItem,
  Numeric as TinyNumeric,
  Button as TinyButton,
  ButtonGroup as TinyButtonGroup
} from '@opentiny/vue'

const index = ref(3)
const carouselRef = ref()

function indexChange(newVal) {
  // 幻灯片从 0 开始
  carouselRef.value.setActiveItem(newVal - 1)
  // 也可以使用 name 去做为跳转参数
}

function next() {
  index.value = Math.min(index.value + 1, 8)
  carouselRef.value.next()
}

function prev() {
  index.value = Math.max(index.value - 1, 0)
  carouselRef.value.prev()
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
