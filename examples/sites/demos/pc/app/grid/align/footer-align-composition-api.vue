<template>
  <tiny-grid :data="tableData" show-footer :footer-method="footerMethod" border footer-align="left">
    <tiny-grid-column type="index" width="60"></tiny-grid-column>
    <tiny-grid-column type="selection" width="60"></tiny-grid-column>
    <tiny-grid-column field="name" title="公司名称"></tiny-grid-column>
    <tiny-grid-column field="employees" title="员工数（右对齐）" footer-align="right"></tiny-grid-column>
    <tiny-grid-column field="age" title="平均年龄（左对齐）"></tiny-grid-column>
    <tiny-grid-column field="wages" title="平均工资（居中对齐）" footer-align="center"></tiny-grid-column>
  </tiny-grid>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Grid as TinyGrid, GridColumn as TinyGridColumn } from '@opentiny/vue'

const tableData = ref([
  {
    id: '1',
    name: 'GFD科技YX公司',
    wages: 6300,
    employees: 800,
    age: 35
  },
  {
    id: '2',
    name: 'WWW科技YX公司',
    wages: 8600,
    employees: 300,
    age: 30
  },
  {
    id: '3',
    name: 'RFV有限责任公司',
    wages: 4800,
    employees: 1300,
    age: 43
  },
  {
    id: '4',
    name: 'TGB科技YX公司',
    wages: 6500,
    employees: 360,
    age: 26
  },
  {
    id: '5',
    name: 'YHN科技YX公司',
    wages: 7100,
    employees: 810,
    age: 36
  },
  {
    id: '6',
    name: 'WSX科技YX公司',
    wages: 5800,
    employees: 800,
    age: 29
  },
  {
    id: '7',
    name: 'KBG物业YX公司',
    wages: 8800,
    employees: 400,
    age: 44
  },
  {
    id: '8',
    name: '深圳市福德宝网络技术YX公司',
    wages: 9100,
    employees: 540,
    age: 25
  }
])

function footerMethod({ columns, data }) {
  return [
    columns.map((column, columnIndex) => {
      if (columnIndex === 0) {
        return '平均'
      }

      if (column.property === 'employees') {
        return Math.floor(data.map((item) => item[column.property]).reduce((acc, item) => acc + item) / data.length)
      }

      if (column.property === 'age') {
        return Math.floor(data.map((item) => item[column.property]).reduce((acc, item) => acc + item) / data.length)
      }

      if (column.property === 'wages') {
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

      if (column.property === 'age') {
        return data.map((item) => item[column.property]).reduce((acc, item) => acc + item)
      }

      if (column.property === 'wages') {
        return data.map((item) => item[column.property]).reduce((acc, item) => acc + item)
      }

      return null
    })
  ]
}
</script>
