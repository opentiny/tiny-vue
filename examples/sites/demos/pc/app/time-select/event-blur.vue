<template>
  <div class="time-select-demo-event">
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
      Modal.message({ message: 'blur事件', status: 'info' })
    },
    change(value) {
      Modal.message({ message: value, status: 'info' })
    },
    focus() {
      Modal.message({ message: 'focus事件', status: 'info' })
    }
  }
}
</script>

<style scoped>
.time-select-demo-event {
  width: 270px;
}
</style>
