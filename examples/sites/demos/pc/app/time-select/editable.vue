<template>
  <div class="time-select-demo-editable">
    <tiny-time-select v-model="value" placeholder="选择时间" :editable="false"></tiny-time-select>
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
.time-select-demo-editable {
  width: 270px;
}
</style>
