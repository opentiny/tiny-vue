<template>
  <tiny-grid :data="tableData" @toolbar-button-click="toolbarButtonClickEvent">
    <template #toolbar>
      <tiny-grid-toolbar :buttons="toolbarButtons"> </tiny-grid-toolbar>
    </template>
    <tiny-grid-column type="index" width="60"></tiny-grid-column>
    <tiny-grid-column type="selection" width="60"></tiny-grid-column>
    <tiny-grid-column field="name" title="公司名称" :filter="nameFilter"></tiny-grid-column>
    <tiny-grid-column field="employees" title="员工数"></tiny-grid-column>
    <tiny-grid-column field="createdDate" title="创建日期"></tiny-grid-column>
    <tiny-grid-column field="city" title="城市" :filter="cityFilter"></tiny-grid-column>
  </tiny-grid>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { Grid as TinyGrid, GridColumn as TinyGridColumn, GridToolbar as TinyGridToolbar } from '@opentiny/vue'

const filteData = [
  { label: '福州', value: '福州' },
  { label: '深圳', value: '深圳' },
  { label: '中山', value: '中山' },
  { label: '龙岩', value: '龙岩' },
  { label: '韶关', value: '韶关' }
]

const nameFilterData = [
  { label: 'GFD科技YX公司', value: 'GFD科技YX公司' },
  { label: 'WWW科技YX公司', value: 'WWW科技YX公司' }
]

let filterNumber = 1

const toolbarButtons = [
  {
    code: 'changeCityFilter',
    name: '动态改变城市列筛选项'
  }
]

const tableData = reactive([
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
])

const cityFilter = reactive({
  multi: true,
  enumable: true,
  defaultFilter: false,
  inputFilter: false,
  values: filteData
})
const nameFilter = reactive({
  multi: true,
  enumable: true,
  defaultFilter: false,
  inputFilter: true,
  values: () => {
    nameFilterData.push({ label: `GFD科技YX公司${filterNumber}`, value: 'GFD科技YX公司' })
    filterNumber++
    return Promise.resolve(nameFilterData)
  }
})

const toolbarButtonClickEvent = ({ code, $grid }) => {
  switch (code) {
    case 'changeCityFilter': {
      cityFilter.values.push({ label: '合肥', value: '合肥' })
      break
    }
  }
}
</script>
