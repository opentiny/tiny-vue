<template>
  <tiny-date-picker v-model="value" readonly></tiny-date-picker>
</template>

<script lang="jsx">
import { DatePicker } from '@opentiny/vue'

export default {
  components: {
    TinyDatePicker: DatePicker
  },
  data() {
    return {
      value: '2020/10/29'
    }
  }
}
</script>
