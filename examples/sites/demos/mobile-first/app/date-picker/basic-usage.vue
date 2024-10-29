<template>
  <div style="width: 270px">
    <tiny-date-picker v-model="value" type="date" title="日期选择"></tiny-date-picker>
  </div>
</template>

<script>
import { TinyDatePicker } from '@opentiny/vue'

export default {
  components: {
    TinyDatePicker
  },
  data() {
    return {
      value: new Date()
    }
  }
}
</script>
