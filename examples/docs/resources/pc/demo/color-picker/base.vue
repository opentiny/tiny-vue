<template>
  <tiny-color-picker v-model="color" />
  <!-- <tiny-color-picker v-model="color2" /> -->
</template>

<script>
import { ColorPicker } from '@opentiny/vue'

export default {
  components: {
    TinyColorPicker: ColorPicker
  },
  setup() {
    return {
      color: '#66ccff',
      color2: '#fff'
    }
  }
}
</script>
