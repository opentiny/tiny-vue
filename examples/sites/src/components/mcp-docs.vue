<template>
  <div class="mcp-list">
    <div class="mcp-title">
      <h2>{{ name }} 组件的 MCP 工具</h2>
    </div>
    <tiny-grid :data="data" row-id="name">
      <tiny-grid-column field="name" title="名称" width="180"> </tiny-grid-column>
      <tiny-grid-column field="param" title="参数类型" width="150"> </tiny-grid-column>
      <tiny-grid-column field="desc" title="工具描述"> </tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script setup>
import { TinyGrid, TinyGridColumn } from '@opentiny/vue'

const props = defineProps({
  name: String,
  data: Array
})
</script>

<style scoped lang="less">
.mcp-list {
  padding-bottom: 150px;
}
.mcp-title {
  font-size: 16px;
  font-weight: bold;
  margin-top: 26px;
  margin-bottom: 26px;
}
</style>
