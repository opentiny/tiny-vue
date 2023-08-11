<template>
  <tiny-grid :row-class-name="rowClassName" :data="tableData" row-key :drop-config="dropConfig">
    <tiny-grid-column field="id" width="60"></tiny-grid-column>
    <tiny-grid-column field="name" title="公司名称"></tiny-grid-column>
    <tiny-grid-column field="employees" title="员工数"></tiny-grid-column>
    <tiny-grid-column field="createdDate" title="创建日期"></tiny-grid-column>
    <tiny-grid-column field="city" title="城市"></tiny-grid-column>
  </tiny-grid>
</template>

<script lang="jsx">
import { Grid, GridColumn } from '@opentiny/vue'
import Sortable from 'sortablejs'

export default {
  components: {
    TinyGrid: Grid,
    TinyGridColumn: GridColumn
  },
  data() {
    return {
      dropConfig: {
        plugin: Sortable,
        row: true,
        filter: '.row__drag-disable', // 根据行的类名来控制是否可以拖动
        onBeforeMove(type, row) {
          if (row.id === '8') return false // return false 时取消拖动
        },
        column: false // 取消列拖拽
      },
      tableData: [
        {
          id: '1',
          name: 'GFD科技YX公司',
          city: '福州',
          employees: 800,
          createdDate: '2014-04-30 00:56:00'
        },
        {
          id: '2',
          name: 'WWW科技YX公司',
          city: '深圳',
          employees: 300,
          createdDate: '2016-07-08 12:36:22'
        },
        {
          id: '3',
          name: 'RFV有限责任公司',
          city: '中山',
          employees: 1300,
          createdDate: '2014-02-14 14:14:14'
        },
        {
          id: '4',
          name: 'TGB科技YX公司',
          city: '龙岩',
          employees: 360,
          createdDate: '2013-01-13 13:13:13'
        },
        {
          id: '5',
          name: 'YHN科技YX公司',
          city: '韶关',
          employees: 810,
          createdDate: '2012-12-12 12:12:12'
        },
        {
          id: '6',
          name: 'WSX科技YX公司',
          city: '黄冈',
          employees: 800,
          createdDate: '2011-11-11 11:11:11'
        },
        {
          id: '7',
          name: 'KBG物业YX公司',
          city: '赤壁',
          employees: 400,
          createdDate: '2016-04-30 23:56:00'
        },
        {
          id: '8',
          name: '可拖但不动',
          city: '厦门',
          employees: 540,
          createdDate: '2016-06-03 13:53:25'
        }
      ]
    }
  },
  methods: {
    rowClassName({ rowIndex }) {
      if (rowIndex < 5) {
        return 'row__drag-disable'
      }
    }
  }
}
</script>

<style>
.sortable-chosen {
  background: #ceeea9 !important;
}
.sortable-drag {
  background: red !important;
}
.row__drag-disable {
  background: #f1f1f1 !important;
}
</style>
