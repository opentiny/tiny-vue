<template>
  <div>
    <tiny-time-select
      v-model="value1"
      @blur="bulr"
      @change="change"
      @focus="focus"
      placeholder="选择时间范围"
    ></tiny-time-select>
  </div>
</template>

<script>
import { TimeSelect, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyTimeSelect: TimeSelect
  },
  data() {
    return {
      value1: '08:30'
    }
  },
  methods: {
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
