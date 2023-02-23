<template>
  <div>
    <tiny-time-select v-model="value1" @change="change" placeholder="选择时间"></tiny-time-select>
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
    change() {
      Modal.message('change事件')
    }
  }
}
</script>
