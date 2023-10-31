<template>
  <div>
    <tiny-color-picker v-model="color" size="large" />
    <tiny-color-picker v-model="color" size="medium" />
    <tiny-color-picker v-model="color" size="small" />
    <tiny-color-picker v-model="color" size="mini" />
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
      color: '#66ccff',
    }
  }
}
</script>
