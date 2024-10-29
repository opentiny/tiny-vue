<template>
  <div class="time-select-demo-editable">
    <tiny-time-select v-model="value" placeholder="选择时间" :editable="false"></tiny-time-select>
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
.time-select-demo-editable {
  width: 270px;
}
</style>
