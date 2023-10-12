<template>
  <div>
    <tiny-color-picker v-model="color" />
  </div>
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
