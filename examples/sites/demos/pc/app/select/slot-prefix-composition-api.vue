<template>
  <tiny-select v-model="value" multiple collapse-tags>
    <template #prefix>
      <tiny-icon-share></tiny-icon-share>
    </template>
    <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
  </tiny-select>
</template>

<script setup>
import { ref } from 'vue'
import { Select as TinySelect, Option as TinyOption } from '@opentiny/vue'
import { iconShare } from '@opentiny/vue-icon'

const options = ref([
  { value: '选项1', label: '北京' },
  { value: '选项2', label: '上海' },
  { value: '选项3', label: '天津' },
  { value: '选项4', label: '重庆' },
  { value: '选项5', label: '深圳' }
])
const value = ref('')

const TinyIconShare = iconShare()
</script>

<style lang="less" scoped>
.tiny-select {
  width: 280px;
}
</style>
