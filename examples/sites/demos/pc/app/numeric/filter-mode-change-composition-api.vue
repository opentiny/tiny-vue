<template>
  <tiny-numeric
    v-model="value"
    title="请选择"
    shape="filter"
    filter
    clearable
    @clear="clearHander"
    @filter-change="changeHander"
  ></tiny-numeric>
</template>

<script setup>
import { ref } from 'vue'
import { TinyNumeric, TinyModal } from '@opentiny/vue'

const value = ref(1)

const clearHander = () => {
  TinyModal.message({ message: '清除 事件', status: 'info' })
}
const changeHander = (label) => {
  TinyModal.message({ message: 'change 事件' + label, status: 'info' })
}
</script>
