<template>
  <tiny-time-select
    v-model="value"
    :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30',
      minTime: '09:00',
      maxTime: '12:30'
    }"
    placeholder="选择时间"
  ></tiny-time-select>
</template>

<script>
import { TimeSelect } from '@opentiny/vue'

export default {
  components: {
    TinyTimeSelect: TimeSelect
  },
  data() {
    return {
      value: '09:30'
    }
  }
}
</script>
