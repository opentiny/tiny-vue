<template>
  <div class="time-select-demo-default">
    <tiny-time-select v-model="value" placeholder="选择时间" :default-value="defaultValue"></tiny-time-select>
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
      value: '',
      defaultValue: '10:00'
    }
  }
}
</script>

<style scoped>
.time-select-demo-default {
  width: 270px;
}
</style>
