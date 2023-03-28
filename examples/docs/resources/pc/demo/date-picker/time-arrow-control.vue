<template>
  <div style="width: 270px">
    <tiny-date-picker v-model="value" type="datetime" time-arrow-control></tiny-date-picker>
  </div>
</template>

<script lang="jsx">
import { DatePicker } from '@opentiny/vue'

export default {
  components: {
    TinyDatePicker: DatePicker
  },
  data() {
    return {
      value: ''
    }
  }
}
</script>
