<template>
  <tiny-color-picker v-model="color" />
  <tiny-button @click="changeColor">
    切换
  </tiny-button>
</template>

<script>
import { ColorPicker, Button } from '@opentiny/vue'
import { ref } from 'vue'

export default {
  components: {
    TinyColorPicker: ColorPicker,
    TinyButton: Button
  },
  setup() {
    const color = ref('#66ccff')
    const changeColor = () => {
      color.value = color.value === '#66ccff' ? '#000' : '#66ccff'
    }
    return {
      color,
      changeColor
    }
  }
}
</script>
