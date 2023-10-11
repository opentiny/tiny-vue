<template>
  <tiny-color-picker v-model="color" />
  <tiny-button @click="changeColor"> 切换 </tiny-button>
</template>

<script>
import { ColorPicker, Button } from '@opentiny/vue'

export default {
  components: {
    TinyColorPicker: ColorPicker,
    TinyButton: Button
  },
  data() {
    return {
      color: '#66ccff'
    }
  },
  methods: {
    changeColor() {
      color.value = color.value === '#66ccff' ? '#000' : '#66ccff'
    }
  }
}
</script>
