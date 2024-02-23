<template>
  <div>
    <tiny-color-picker v-model="color" size="large" />
    <tiny-color-picker v-model="color" size="medium" />
    <tiny-color-picker v-model="color" size="small" />
    <tiny-color-picker v-model="color" size="mini" />
  </div>
</template>

<script setup>
import { ColorPicker as TinyColorPicker } from '@opentiny/vue'
import { ref } from 'vue'
const color = ref('#66ccff')
</script>
