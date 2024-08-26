<template>
  <tiny-grid ref="mytableRef" :select-config="selectConfig" :data="tableData">
    <tiny-grid-column type="selection" width="60"></tiny-grid-column>
    <tiny-grid-column field="name" title="名称"></tiny-grid-column>
    <tiny-grid-column field="area" title="所属区域"></tiny-grid-column>
    <tiny-grid-column field="address" title="地址"></tiny-grid-column>
    <tiny-grid-column field="introduction" title="公司简介" show-overflow></tiny-grid-column>
  </tiny-grid>
</template>

<script setup>
import { ref } from 'vue'
import { Grid as TinyGrid, GridColumn as TinyGridColumn } from '@opentiny/vue'

const selectConfig = ref({
  // 设置为true或undefined，在空数据时Selection列表头复选框会自动禁用；设置为false则不自动禁用保持和旧版本兼容
  headerAutoDisabled: true
})
const tableData = ref([])
</script>
