<template>
  <div class="demo-date-picker-wrap">
    <tiny-date-picker v-model="value" :suffix-icon="IconMinus" popper-class="my-date-picker"></tiny-date-picker>
  </div>
</template>

<script>
import { DatePicker } from '@opentiny/vue'
import { iconMinus } from '@opentiny/vue-icon'

export default {
  components: {
    TinyDatePicker: DatePicker
  },
  data() {
    return {
      value: '',
      IconMinus: iconMinus()
    }
  }
}
</script>

<style>
.demo-date-picker-wrap {
  width: 280px;
}

.my-date-picker {
  background-color: #ddd;
}
</style>
