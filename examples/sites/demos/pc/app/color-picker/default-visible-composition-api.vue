<template>
  <tiny-color-picker v-model="color" visible />
</template>

<script setup>
import { ColorPicker as TinyColorPicker } from '@opentiny/vue'
import { ref } from 'vue'

const color = ref('#66ccff')
</script>
