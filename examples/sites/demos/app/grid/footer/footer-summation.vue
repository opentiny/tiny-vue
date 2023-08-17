<template>
  <tiny-grid @footer-cell-dblclick="footerCellDblclick" :data="tableData" show-footer :footer-method="footerMethod">
    <tiny-grid-column type="index" width="60"></tiny-grid-column>
    <tiny-grid-column type="selection" width="60"></tiny-grid-column>
    <tiny-grid-column field="name" title="公司名称"></tiny-grid-column>
    <tiny-grid-column field="employees" title="员工数"></tiny-grid-column>
    <tiny-grid-column field="createdDate" title="创建日期"></tiny-grid-column>
    <tiny-grid-column field="city" title="城市"></tiny-grid-column>
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
          name: '深圳市福德宝网络技术YX公司',
          city: '厦门',
          employees: 540,
          createdDate: '2016-06-03 13:53:25'
        }
      ]
    }
  },
  methods: {
    footerCellDblclick() {
      alert('触发表尾单元格双击事件')
    },
    footerMethod({ columns, data }) {
      return [
        columns.map((column, columnIndex) => {
          if (columnIndex === 0) {
            return '平均'
          }

          if (column.property === 'employees') {
            return Math.floor(data.map((item) => item[column.property]).reduce((acc, item) => acc + item) / data.length)
          }

          return null
        }),
        columns.map((column, columnIndex) => {
          if (columnIndex === 0) {
            return '和值'
          }

          if (column.property === 'employees') {
            return data.map((item) => item[column.property]).reduce((acc, item) => acc + item)
          }

          return null
        })
      ]
    }
  }
}
</script>
