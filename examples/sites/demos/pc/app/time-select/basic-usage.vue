<template>
  <div class="time-select-demo-basic">
    <tiny-time-select v-model="value" placeholder="选择时间"></tiny-time-select>
  </div>
</template>

<script>
import { TinyTimeSelect } from '@opentiny/vue'

export default {
  components: {
    TinyTimeSelect
  },
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style scoped>
.time-select-demo-basic {
  width: 270px;
}
</style>
