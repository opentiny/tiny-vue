<template>
  <tiny-grid ref="clearfiltergrid" :data="tableData" @toolbar-button-click="toolbarButtonClickEvent">
    <template #toolbar>
      <tiny-grid-toolbar :buttons="toolbarButtons"> </tiny-grid-toolbar>
    </template>
    <tiny-grid-column type="index" width="60"></tiny-grid-column>
    <tiny-grid-column type="selection" width="60"></tiny-grid-column>
    <tiny-grid-column field="name" title="公司名称" :filter="nameFilter"></tiny-grid-column>
    <tiny-grid-column field="employees" title="员工数"></tiny-grid-column>
    <tiny-grid-column field="created_date" title="创建日期"></tiny-grid-column>
    <tiny-grid-column field="city" title="城市" :filter="cityFilter"></tiny-grid-column>
  </tiny-grid>
</template>

<script>
import { Grid, GridColumn, GridToolbar } from '@opentiny/vue'

const filteData = [
  { label: '福州', value: '福州' },
  { label: '深圳', value: '深圳' },
  { label: '中山', value: '中山' },
  { label: '龙岩', value: '龙岩' },
  { label: '韶关', value: '韶关' }
]

export default {
  components: {
    TinyGrid: Grid,
    TinyGridColumn: GridColumn,
    TinyGridToolbar: GridToolbar
  },
  data() {
    return {
      toolbarButtons: [
        {
          code: 'clearFilter',
          name: '清空表格所有过滤条件'
        },
        {
          code: 'clearFilterName',
          name: '清空表格name字段的过滤条件'
        },
        {
          code: 'closeFilter',
          name: '手动关闭筛选面板'
        }
      ],
      tableData: [
        {
          id: '1',
          name: 'GFD科技公司',
          city: '福州',
          employees: 800,
          created_date: '2014-04-30 00:56:00'
        },
        {
          id: '2',
          name: 'WWW科技公司',
          city: '深圳',
          employees: 300,
          created_date: '2016-07-08 12:36:22'
        },
        {
          id: '3',
          name: 'RFV有限责任公司',
          city: '中山',
          employees: 1300,
          created_date: '2014-02-14 14:14:14'
        },
        {
          id: '4',
          name: 'TGB科技公司',
          city: '龙岩',
          employees: 360,
          created_date: '2013-01-13 13:13:13'
        },
        {
          id: '5',
          name: 'YHN科技公司',
          city: '韶关',
          employees: 810,
          created_date: '2012-12-12 12:12:12'
        },
        {
          id: '6',
          name: 'WSX科技公司',
          city: '黄冈',
          employees: 800,
          created_date: '2011-11-11 11:11:11'
        },
        {
          id: '7',
          name: 'KBG物业公司',
          city: '赤壁',
          employees: 400,
          created_date: '2016-04-30 23:56:00'
        },
        {
          id: '8',
          name: 'SZ市福德宝网络技术公司',
          city: '厦门',
          employees: 540,
          created_date: '2016-06-03 13:53:25'
        }
      ],
      cityFilter: {
        multi: true,
        enumable: true,
        defaultFilter: false,
        inputFilter: false,
        values: filteData
      },
      nameFilter: {
        multi: true,
        enumable: true,
        defaultFilter: false,
        inputFilter: true
      }
    }
  },
  methods: {
    toolbarButtonClickEvent({ code, $grid }) {
      switch (code) {
        case 'clearFilter': {
          $grid.clearFilter()
          break
        }
        case 'clearFilterName': {
          $grid.clearFilter('name')
          break
        }
        case 'closeFilter': {
          $grid.closeFilter()
          break
        }
      }
    }
  }
}
</script>
