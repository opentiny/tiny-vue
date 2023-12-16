<template>
  <div class="time-select-demo-disabled">
    <tiny-time-select v-model="value" placeholder="选择时间" disabled></tiny-time-select>
  </div>
</template>

<script>
import { TimeSelect } from '@opentiny/vue'

export default {
  components: {
    TinyTimeSelect: TimeSelect
  },
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style scoped>
.time-select-demo-disabled {
  width: 270px;
}
</style>
