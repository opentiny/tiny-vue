<template>
  <div class="demo-date-picker-wrap demo-custom-suffix-icon">
    <tiny-date-picker v-model="value" :suffix-icon="IconMinus" popper-class="my-date-picker"></tiny-date-picker>
  </div>
</template>

<script>
import { TinyDatePicker } from '@opentiny/vue'
import { iconMinus } from '@opentiny/vue-icon'

export default {
  components: {
    TinyDatePicker
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
  width: 360px;
}

.my-date-picker {
  background-color: #f0f0f0;
}
</style>
