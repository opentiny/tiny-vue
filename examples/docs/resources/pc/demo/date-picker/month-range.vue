<template>
  <tiny-date-picker v-model="value" type="monthrange" :picker-options="maxOptions"></tiny-date-picker>
</template>

<script lang="jsx">
import { DatePicker } from '@opentiny/vue'

export default {
  components: {
    TinyDatePicker: DatePicker
  },
  data() {
    return {
      value: '',
      maxOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        }
      }
    }
  }
}
</script>
