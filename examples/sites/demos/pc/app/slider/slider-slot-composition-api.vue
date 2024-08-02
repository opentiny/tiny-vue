<template>
  <tiny-slider v-model="value" :show-input="true">
    <template #default="slotScope">
      <b>{{ slotScope.slotScope }}%</b>
    </template>
  </tiny-slider>
</template>

<script setup>
import { ref } from 'vue'
import { Slider as TinySlider } from '@opentiny/vue'

const value = ref(40)
</script>

<style scoped>
.tiny-slider-container {
  margin-top: 50px;
}
</style>
