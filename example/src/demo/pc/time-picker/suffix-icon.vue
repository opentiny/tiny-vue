<template>
  <div>
    <tiny-time-picker
      v-model="value1"
      :suffix-icon="IconMinus"
      placeholder="选择时间范围"
    ></tiny-time-picker>
  </div>
</template>

<script>
import { TimePicker } from '@opentiny/vue'
import { iconMinus } from '@opentiny/vue-icon'

export default {
  components: {
    TinyTimePicker: TimePicker
  },
  data() {
    return {
      value1: new Date(2016, 9, 10, 18, 40),
      IconMinus: iconMinus()
    }
  }
}
</script>
