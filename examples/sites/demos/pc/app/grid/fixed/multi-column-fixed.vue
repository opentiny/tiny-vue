<template>
  <tiny-grid height="500" :data="tableData">
    <tiny-grid-column type="index" width="60" fixed="left"></tiny-grid-column>
    <tiny-grid-column type="selection" width="60" fixed="left"></tiny-grid-column>
    <tiny-grid-column field="name" title="公司名称" width="500"></tiny-grid-column>
    <tiny-grid-column field="employees" title="员工数" width="500"></tiny-grid-column>
    <tiny-grid-column field="employees" title="员工数-1" width="500"></tiny-grid-column>
    <tiny-grid-column field="employees" title="员工数-2" width="500"></tiny-grid-column>
    <tiny-grid-column field="city" title="城市" width="200" fixed="right"></tiny-grid-column>
    <tiny-grid-column field="createdDate" title="创建日期" width="500"></tiny-grid-column>
  </tiny-grid>
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
      tableData: Array.from({ length: 30 }, (a, i) => {
        return {
          id: `${i + 1}`,
          name: 'GFD科技YX公司',
          city: '福州',
          employees: 800 + i,
          createdDate: '2014-04-30 00:56:00'
        }
      })
    }
  }
}
</script>
