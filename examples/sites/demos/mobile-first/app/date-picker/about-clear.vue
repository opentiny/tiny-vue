<template>
  <div>
    <p>默认可清除</p>
    <tiny-date-picker v-model="value1"></tiny-date-picker>
    <br />
    <p>不可清除：</p>
    <tiny-date-picker v-model="value2" :clearable="false"></tiny-date-picker>
  </div>
</template>

<script>
import { DatePicker } from '@opentiny/vue'

export default {
  components: {
    TinyDatePicker: DatePicker
  },
  data() {
    return {
      value1: new Date(),
      value2: new Date()
    }
  }
}
</script>
