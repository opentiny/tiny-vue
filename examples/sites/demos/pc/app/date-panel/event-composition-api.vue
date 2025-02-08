<template>
  <div class="demo-date-panel-wrap">
    <div>{{ value }}</div>
    <tiny-date-panel v-model="value" @select-change="handleSelectChange"></tiny-date-panel>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyDatePanel, TinyModal } from '@opentiny/vue'

const value = ref()

const handleSelectChange = (value) => {
  TinyModal.message({ message: '触发 面板选中 事件，组件绑定值为：' + value, status: 'info' })
}
</script>

<style scoped lang="less">
.demo-date-panel-wrap {
  width: 560px;

  & > * {
    margin-top: 12px;
  }
}
</style>
