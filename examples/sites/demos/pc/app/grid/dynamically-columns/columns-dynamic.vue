<template>
  <tiny-grid :fetch-data="fetchData">
    <tiny-grid-column
      v-for="(item, index) in tableColumnList"
      :key="index"
      :field="item.field"
      :title="item.field"
    ></tiny-grid-column>
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
      fetchData: { api: this.getData },
      tableColumnList: []
    }
  },
  mounted() {
    this.getColumns()
  },
  methods: {
    getData() {
      const tableData = [
        {
          id: '1',
          name: 'GFD科技有限公司',
          city: '福州',
          employees: 800,
          created_date: '2014-04-30 00:56:00',
          boole: false
        }
      ]

      return new Promise((resolve) => {
        setTimeout(() => resolve(tableData))
      })
    },
    getColumns() {
      setTimeout(() => {
        this.tableColumnList = [{ field: 'employees' }, { field: 'created_date' }, { field: 'name' }, { field: 'city' }]
      }, 300)
    }
  }
}
</script>
