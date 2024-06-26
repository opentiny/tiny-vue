<template>
  <div>
    <tiny-button @click="disabled = !disabled">改为{{ disabled ? '启用' : '禁用' }}</tiny-button>
    <br /><br />

    <tiny-date-picker v-model="value" :disabled="disabled"></tiny-date-picker>
    <br /><br />

    <tiny-button @click="displayOnly = !displayOnly">改为{{ displayOnly ? '可操作' : '仅显示' }}模式</tiny-button>
    <br /><br />

    <tiny-date-picker v-model="value" :display-only="displayOnly"></tiny-date-picker>
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
      value: new Date(),
      disabled: false,
      displayOnly: false
    }
  }
}
</script>
