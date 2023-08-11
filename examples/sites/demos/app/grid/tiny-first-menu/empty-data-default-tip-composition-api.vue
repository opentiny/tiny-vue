<template>
  <tiny-grid :data="tableData" height="300">
    <tiny-grid-column type="index" width="5%"></tiny-grid-column>
    <tiny-grid-column field="name" title="名称"></tiny-grid-column>
    <tiny-grid-column field="area" title="区域"></tiny-grid-column>
    <tiny-grid-column field="address" title="地址"></tiny-grid-column>
    <tiny-grid-column field="introduction" title="公司简介" show-overflow></tiny-grid-column>
  </tiny-grid>
</template>

<script setup>
import { Grid as TinyGrid, GridColumn as TinyGridColumn } from '@opentiny/vue'
import { reactive } from 'vue'

const tableData = reactive([])
</script>
