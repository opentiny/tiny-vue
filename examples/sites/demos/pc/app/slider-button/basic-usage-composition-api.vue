<template>
  <tiny-slider-button-group v-model="radio2">
    <tiny-slider-button label="1">选项</tiny-slider-button>
    <tiny-slider-button label="2">选项选项选选项</tiny-slider-button>
    <tiny-slider-button label="3">选项</tiny-slider-button>
    <tiny-slider-button label="4">选项选项</tiny-slider-button>
  </tiny-slider-button-group>
</template>

<script setup>
import { TinySliderButton, TinySliderButtonGroup } from '@opentiny/vue'
import { ref } from 'vue'

const radio2 = ref('1')
</script>
