<template>
  <div>
    <div class="page__hd">
      <h1 class="page__title">Slider</h1>
      <p class="page__desc">滑块</p>
    </div>
    <div class="padds">
      <tiny-slider v-model="value" :step="10" :format-tooltip="format"></tiny-slider>
    </div>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinySlider } from '@opentiny/vue-mobile'

const value = ref(20)

function format(value) { // NISVUE3 FIXME: value重复定义，请手工修改
  return '当前值为：' + value
}
</script>

<style scoped>
.page__hd {
  padding: 40px;
}
.page__title {
  font-weight: 400;
  font-size: 21px;
  text-align: left;
}
.page__desc {
  margin-top: 5px;
  color: #888;
  font-size: 14px;
  text-align: left;
}
.padds {
  padding: 15px;
}
</style>
