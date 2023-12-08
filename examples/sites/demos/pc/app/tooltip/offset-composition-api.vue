<template>
  <div>
    <tiny-slider v-model="offset" :min="-200" :max="200"></tiny-slider>
    <tiny-tooltip content="出现位置的偏移量" :offset="offset" manual v-model="show" :key="offset">
      <button class="tiny-button tiny-button--primary">出现位置的偏移量</button>
    </tiny-tooltip>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Tooltip as TinyTooltip, Slider as TinySlider } from '@opentiny/vue'

const offset = ref(10)
const show = ref(true)
</script>
