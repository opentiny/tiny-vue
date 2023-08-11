<template>
  <div style="width: 270px">
    <tiny-button @click="click">获取焦点</tiny-button>
    <tiny-button @click="Switchover">启用/禁用</tiny-button>
    <tiny-date-picker v-model="value" ref="refFocus" :disabled="disabled"></tiny-date-picker>
  </div>
</template>

<script lang="jsx">
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
    click() {
      this.$refs.refFocus.$el.querySelector('input').focus()
    },
    Switchover() {
      this.disabled = !this.disabled
    }
  }
}
</script>
