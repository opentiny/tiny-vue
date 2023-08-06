<template>
  <tiny-color-picker v-model="color" :visible="true" />
  <button @click="change">
    Change
  </button>
  <!-- <tiny-color-picker v-model="color2" /> -->
</template>

<script>
import { ColorPicker } from '@opentiny/vue'
import { ref } from 'vue'

export default {
  components: {
    TinyColorPicker: ColorPicker
  },
  setup() {
    const color = ref('#66ccff')
    const change = () => {
      color.value = color.value === '#66ccff' ? '#000' : '#66ccff'
    }
    return {
      color,
      change
    }
  }
}
</script>
