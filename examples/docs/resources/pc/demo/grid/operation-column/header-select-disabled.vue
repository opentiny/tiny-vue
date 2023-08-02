<template>
  <tiny-grid ref="mytable" :select-config="selectConfig" :data="tableData">
    <tiny-grid-column type="index" width="60"></tiny-grid-column>
    <tiny-grid-column type="selection" width="60"></tiny-grid-column>
    <tiny-grid-column field="name" title="名称"></tiny-grid-column>
    <tiny-grid-column field="area" title="所属区域"></tiny-grid-column>
    <tiny-grid-column field="address" title="地址"></tiny-grid-column>
    <tiny-grid-column field="introduction" title="公司简介" show-overflow></tiny-grid-column>
  </tiny-grid>
</template>

<script>
import { Grid, GridColumn } from '@opentiny/vue'

export default {
  components: {
    TinyGrid: Grid,
    TinyGridColumn: GridColumn
  },
  data() {
    return {
      selectConfig: {
        // 设置为true或undefined，在空数据时Selection列表头复选框会自动禁用；设置为false则不自动禁用保持和旧版本兼容
        headerAutoDisabled: true
      },
      tableData: []
    }
  }
}
</script>
