<template>
  <div>
    <div>
      <tiny-slider v-model="value" :marks="marks"></tiny-slider>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Slider as TinySlider } from '@opentiny/vue'

const marks = ref({
  10: '10%',
  40: '40%',
  50: '50%'
})

const value = ref(20)
</script>
