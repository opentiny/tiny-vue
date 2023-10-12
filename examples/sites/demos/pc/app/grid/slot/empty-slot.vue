<template>
  <div>
    <tiny-grid ref="basicGrid" :data="tableData">
      <template #empty>暂无数据</template>
      <tiny-grid-column type="index" width="60"></tiny-grid-column>
      <tiny-grid-column type="selection" width="50"></tiny-grid-column>
      <tiny-grid-column field="name" title="名称"></tiny-grid-column>
      <tiny-grid-column field="area" title="区域"></tiny-grid-column>
      <tiny-grid-column field="address" title="地址"></tiny-grid-column>
      <tiny-grid-column field="introduction" title="公司简介"></tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script lang="jsx">
import { Grid, GridColumn } from '@opentiny/vue'

export default {
  components: {
    TinyGrid: Grid,
    TinyGridColumn: GridColumn
  },
  data() {
    return {
      tableData: []
    }
  }
}
</script>
