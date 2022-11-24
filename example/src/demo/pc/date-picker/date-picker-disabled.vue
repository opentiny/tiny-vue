<template>
  <div style="width: 270px">
    <tiny-button @click="Switchover" style="margin-bottom: 10px"
      >启用/禁用</tiny-button
    >
    <tiny-date-picker v-model="value" :disabled="disabled"></tiny-date-picker>
  </div>
</template>

<script>
import { DatePicker, Button } from '@opentiny/vue'

export default {
  components: {
    TinyDatePicker: DatePicker,
    TinyButton: Button
  },
  data() {
    return {
      value: '',
      disabled: false
    }
  },
  methods: {
    Switchover() {
      this.disabled = !this.disabled
    }
  }
}
</script>
