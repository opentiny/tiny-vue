<template>
  <tiny-date-picker
    v-model="value"
    :suffix-icon="IconMinus"
    popper-class="Mydatepicker"
  ></tiny-date-picker>
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
