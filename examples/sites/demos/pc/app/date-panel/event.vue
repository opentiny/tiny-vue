<template>
  <div class="demo-date-panel-wrap">
    <div class="value">{{ value }}</div>
    <tiny-date-panel v-model="value" @select-change="handleSelectChange"></tiny-date-panel>
    <div class="value1">{{ value1 }}</div>
    <tiny-date-range type="daterange" v-model="value1" @select-change="handleSelectChange1"></tiny-date-range>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyDatePanel, TinyDateRange, TinyModal } from '@opentiny/vue'

const value = ref('2025-01-15')
const value1 = ref(['2025-01-15', '2025-02-15'])

const handleSelectChange = (value) => {
  TinyModal.message({ message: '触发 面板选中 事件，组件绑定值为：' + value, status: 'info' })
}

const handleSelectChange1 = (value) => {
  TinyModal.message({ message: '触发 区间面板选中 事件，组件绑定值为：' + value, status: 'info' })
}
</script>

<style scoped lang="less">
.demo-date-panel-wrap {
  width: 560px;
  & > * {
    margin-top: 12px;
  }
  .tiny-date-range-picker {
    width: 668px;
  }
}
</style>
