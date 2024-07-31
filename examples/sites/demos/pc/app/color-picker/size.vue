<template>
  <div>
    <tiny-color-picker v-model="color" size="large" />
    <tiny-color-picker v-model="color" size="medium" class="demo-margin" />
    <tiny-color-picker v-model="color" size="small" class="demo-margin" />
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
      color: '#66ccff'
    }
  }
}
</script>

<style scoped>
.demo-margin {
  margin: 8px 0;
}
</style>
