<template>
  <tiny-date-picker v-model="referenceDate" :isutc8="true" format="dd/MM/yyyy"></tiny-date-picker>
</template>

<script>
import { DatePicker } from '@opentiny/vue'

export default {
  components: {
    TinyDatePicker: DatePicker
  },
  data() {
    return {
      referenceDate: '2020-10-28T00:00:00.000+0800'
    }
  }
}
</script>
