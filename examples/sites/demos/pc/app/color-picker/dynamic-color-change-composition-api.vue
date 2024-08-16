<template>
  <tiny-color-picker v-model="color" />
  <br />
  <tiny-button @click="changeColor"> 切换 </tiny-button>
</template>

<script setup>
import { ColorPicker as TinyColorPicker, Button as TinyButton } from '@opentiny/vue'
import { ref } from 'vue'

const color = ref('#66ccff')
const changeColor = () => {
  color.value = color.value === '#66ccff' ? '#000' : '#66ccff'
}
</script>
