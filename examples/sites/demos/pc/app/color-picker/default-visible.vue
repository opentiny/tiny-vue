<template>
  <tiny-color-picker v-model="color" visible />
</template>

<script>
import { ColorPicker } from '@opentiny/vue'

export default {
  components: {
    TinyColorPicker: ColorPicker
  },
  data() {
    return {
      color: '#66ccff'
    }
  }
}
</script>
