<template>
  <tiny-color-picker v-model="color" visible />
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
    return {
      color,
    }
  }
}
</script>
