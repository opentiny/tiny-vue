<template>
  <div>
    <tiny-color-picker v-model="color" placement="top" />
    <tiny-color-picker v-model="color"/>
  </div>
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

<style scoped>
.demo-margin {
  margin: 8px 0;
}
</style>
