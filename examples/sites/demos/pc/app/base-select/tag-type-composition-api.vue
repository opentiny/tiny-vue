<template>
  <tiny-base-select v-model="value" multiple tag-type="warning">
    <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
  </tiny-base-select>
</template>

<script setup>
import { ref } from 'vue'
import { TinyBaseSelect, TinyOption } from '@opentiny/vue'

const options = ref([
  { value: '选项 1', label: '北京' },
  { value: '选项 2', label: '上海' },
  { value: '选项 3', label: '天津' },
  { value: '选项 4', label: '重庆' },
  { value: '选项 5', label: '深圳' },
  { value: '选项 6', label: '南京' },
  { value: '选项 7', label: '成都' }
])
const value = ref(['选项 1', '选项 2'])
</script>

<style lang="less" scoped>
.tiny-base-select {
  width: 280px;
}
</style>
