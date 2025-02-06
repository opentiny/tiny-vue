<template>
  <div class="demo-date-picker-wrap">
    <tiny-time-picker v-model="value1" @blur="blur" @change="change" @focus="focus"></tiny-time-picker>
  </div>
</template>

<script>
import { TinyTimePicker, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyTimePicker
  },
  data() {
    return {
      value1: new Date(2016, 9, 10, 18, 40)
    }
  },
  methods: {
    blur() {
      TinyModal.message({ message: 'blur 事件', status: 'info' })
    },
    change() {
      TinyModal.message({ message: 'change 事件', status: 'info' })
    },
    focus() {
      TinyModal.message({ message: 'focus 事件', status: 'info' })
    }
  }
}
</script>

<style scoped lang="less">
.demo-date-picker-wrap {
  width: 280px;

  & > * {
    margin-top: 12px;
  }
}
</style>
