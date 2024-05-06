<template>
  <div>
    <tiny-button @click="boxVisibility = true">弹出表单</tiny-button>
    <tiny-dialog-box
      :visible="boxVisibility"
      @update:visible="boxVisibility = $event"
      max-height="500"
      title="消息"
      width="30%"
      :is-form-reset="false"
    >
      <tiny-carousel height="150px" arrow="always">
        <tiny-carousel-item class="carousel-item-demo" v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </tiny-carousel-item>
      </tiny-carousel>
      <template #footer>
        <tiny-button type="primary" @click="handleSubmit">确定</tiny-button>
      </template>
    </tiny-dialog-box>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  Carousel as TinyCarousel,
  CarouselItem as TinyCarouselItem,
  Button as TinyButton,
  DialogBox as TinyDialogBox
} from '@opentiny/vue'

const boxVisibility = ref(false)
function handleSubmit() {
  boxVisibility.value = false
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
</style>
