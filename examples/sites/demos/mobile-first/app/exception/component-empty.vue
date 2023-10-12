<template>
  <div>
    <tiny-grid :data="tableData" height="300">
      <tiny-grid-column type="index" width="5%"></tiny-grid-column>
      <tiny-grid-column field="name" title="名称"></tiny-grid-column>
      <tiny-grid-column field="area" title="区域"></tiny-grid-column>
      <tiny-grid-column field="address" title="地址"></tiny-grid-column>
      <tiny-grid-column field="introduction" title="公司简介" show-overflow></tiny-grid-column>
      <template #empty>
        <tiny-exception component-page type="nodata"></tiny-exception>
      </template>
    </tiny-grid>
    <div class="demo-split">
      <tiny-split v-model="split2">
        <template #left>
          <tiny-exception component-page type="nodata"></tiny-exception>
        </template>
        <template #right>
          <tiny-exception component-page type="nodata"></tiny-exception>
        </template>
      </tiny-split>
    </div>
  </div>
</template>

<script>
import { Grid, GridColumn, Exception, Split } from '@opentiny/vue'

export default {
  components: {
    TinyGrid: Grid,
    TinyGridColumn: GridColumn,
    TinyException: Exception,
    TinySplit: Split
  },
  methods: {
    renderEmpty() {
      return '没有更多数据了'
    }
  },
  data() {
    return {
      tableData: [],
      split2: 0.4
    }
  }
}
</script>

<style scoped>
.demo-split {
  height: 200px;
  border: 1px solid #d9d9d9;
  margin-bottom: 20px;
}

.demo-split-pane {
  padding: 10px;
}
</style>
