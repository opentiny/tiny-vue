<template>
  <tiny-base-select v-model="value" multiple collapse-tags>
    <template #prefix>
      <tiny-icon-location></tiny-icon-location>
    </template>
    <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
  </tiny-base-select>
</template>

<script setup>
import { ref } from 'vue'
import { TinyBaseSelect, TinyOption } from '@opentiny/vue'
import { iconLocation } from '@opentiny/vue-icon'

const options = ref([
  { value: '选项 1', label: '北京' },
  { value: '选项 2', label: '上海' },
  { value: '选项 3', label: '天津' },
  { value: '选项 4', label: '重庆' },
  { value: '选项 5', label: '深圳' }
])
const value = ref('')

const TinyIconLocation = iconLocation()
</script>

<style lang="less" scoped>
.tiny-base-select {
  width: 280px;
}
</style>
