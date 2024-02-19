<template>
  <tiny-numeric
    v-model="value"
    title="请选择"
    shape="filter"
    clearable
    filter
    @clear="clearHander"
    @filter-change="changeHander"
  ></tiny-numeric>
</template>

<script>
import { Numeric, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyNumeric: Numeric
  },
  data() {
    return {
      value: 1
    }
  },
  methods: {
    clearHander() {
      Modal.message({ message: '清除 事件', status: 'info' })
    },
    changeHander(label) {
      Modal.message({ message: 'change 事件' + label, status: 'info' })
    }
  }
}
</script>
