<template>
  <div class="demo-date-picker-wrap">
    <tiny-button @click="handleFocus">focus</tiny-button>
    <tiny-time-picker
      v-model="value1"
      ref="timePickerRef"
      @blur="blur"
      @change="change"
      @focus="focus"
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
      this.$refs.timePickerRef.$el.querySelector('input').focus()
    },
    blur() {
      Modal.message({ message: 'blur事件', status: 'info' })
    },
    change() {
      Modal.message({ message: 'change事件', status: 'info' })
    },
    focus() {
      Modal.message({ message: 'focus事件', status: 'info' })
    }
  }
}
</script>

<style scoped lang="less">
.demo-date-picker-wrap {
  width: 200px;

  & > * {
    margin-top: 12px;
  }
}
</style>
