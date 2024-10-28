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
import { TinyAmount, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyAmount
  },
  data() {
    return {
      value: 88.88
    }
  },
  methods: {
    clearHander() {
      TinyModal.message({ message: '清除 事件', status: 'info' })
    },
    changeHander(label) {
      TinyModal.message({ message: 'change 事件' + label, status: 'info' })
    }
  }
}
</script>
