<template>
  <div>
    <tiny-time-picker
      v-model="value1"
      :picker-options="{ selectableRange: '18:30:00 - 20:30:00' }"
      placeholder="任意时间点"
      :clear-icon="IconClose"
    ></tiny-time-picker>
  </div>
</template>

<script lang="jsx">
import { TimePicker } from '@opentiny/vue'
import { IconClose } from '@opentiny/vue-icon'

export default {
  components: {
    TinyTimePicker: TimePicker
  },
  data() {
    return {
      IconClose: IconClose(),
      value1: new Date(2016, 9, 10, 18, 40)
    }
  }
}
</script>
