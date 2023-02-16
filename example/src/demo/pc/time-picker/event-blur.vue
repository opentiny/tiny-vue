<template>
  <div>
    <tiny-button @click="handleFocus">focus</tiny-button>
    <tiny-time-picker
      v-model="value1"
      ref="timePicker"
      @blur="bulr"
      @change="change"
      @focus="focus"
      placeholder="选择时间范围"
    ></tiny-time-picker>
  </div>
</template>

<script>
import { TimePicker, Modal, Button } from '@opentiny/vue'

export default {
  components: {
    TinyTimePicker: TimePicker,
    TinyButton: Button
  },
  data() {
    return {
      value1: new Date(2016, 9, 10, 18, 40)
    }
  },
  methods: {
    handleFocus() {
      this.$refs.timePicker.focus()
    },
    bulr() {
      Modal.message('blur事件')
    },
    change() {
      Modal.message('change事件')
    },
    focus() {
      Modal.message('focus事件')
    }
  }
}
</script>
