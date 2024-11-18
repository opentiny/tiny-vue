<template>
  <tiny-color-picker v-model="color" visible />
</template>

<script>
import { TinyColorPicker } from '@opentiny/vue'

export default {
  components: {
    TinyColorPicker
  },
  data() {
    return {
      color: '#66ccff'
    }
  }
}
</script>
