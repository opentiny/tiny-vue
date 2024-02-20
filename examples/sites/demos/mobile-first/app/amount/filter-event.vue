<template>
  <tiny-amount
    v-model="value"
    shape="filter"
    label="请选择"
    clearable
    filter
    @clear="clearHander"
    @filter-change="changeHander"
  ></tiny-amount>
</template>

<script>
import { Amount, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyAmount: Amount
  },
  data() {
    return {
      value: 88.88
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
