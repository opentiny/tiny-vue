<template>
  <tiny-slider v-model="value2" @change="change"></tiny-slider>
</template>

<script setup>
import { ref } from 'vue'
import { Slider as TinySlider, Notify } from '@opentiny/vue'

const value2 = ref(40)

function change(val) {
  Notify({
    title: '触发change事件',
    message: `改变值为${val}`,
    offset: 100
  })
}
</script>
