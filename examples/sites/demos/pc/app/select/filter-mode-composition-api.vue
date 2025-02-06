<template>
  <div>
    <div>场景 1：过滤器模式 (默认)</div>
    <br />
    <tiny-select v-model="value" label="地区名称" shape="filter" :drop-style="{ width: '200px', 'min-width': '200px' }">
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
    <br />
    <br />
    <br />
    <div>场景 2：过滤器模式 (透明)</div>
    <br />
    <tiny-select
      v-model="value"
      label="地区名称"
      shape="filter"
      :drop-style="{ width: '200px', 'min-width': '200px' }"
      blank
    >
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinySelect, TinyOption } from '@opentiny/vue'

const options = ref([
  { value: '选项 1', label: '北京' },
  { value: '选项 2', label: '上海' },
  { value: '选项 3', label: '天津' },
  { value: '选项 4', label: '重庆' },
  { value: '选项 5', label: '深圳' }
])
const value = ref('')
</script>
