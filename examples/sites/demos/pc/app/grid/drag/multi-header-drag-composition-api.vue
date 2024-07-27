<template>
  <tiny-grid
    :data="tableData"
    column-key
    :drop-config="dropConfig"
    @column-drag-start="columnDragStart"
    @column-drop="columnDrop"
    column-min-width="180"
    :optimization="{ scrollX: { gt: 10, rSize: 15 } }"
    show-header-overflow
  >
    <tiny-grid-column title="group">
      <tiny-grid-column type="index" width="60" fixed="left"></tiny-grid-column>
      <tiny-grid-column field="name" title="公司名称" fixed="left"></tiny-grid-column>
    </tiny-grid-column>
    <tiny-grid-column title="group1">
      <tiny-grid-column field="employees" title="员工数1"></tiny-grid-column>
      <tiny-grid-column field="created_date" title="创建日期1"></tiny-grid-column>
    </tiny-grid-column>
    <tiny-grid-column title="group2">
      <tiny-grid-column field="employees" title="员工数2"></tiny-grid-column>
      <tiny-grid-column field="created_date" title="创建日期2"></tiny-grid-column>
    </tiny-grid-column>
    <tiny-grid-column title="group3">
      <tiny-grid-column field="employees" title="员工数3"></tiny-grid-column>
      <tiny-grid-column field="created_date" title="创建日期3"></tiny-grid-column>
    </tiny-grid-column>
    <tiny-grid-column title="group4">
      <tiny-grid-column field="employees" title="员工数4"></tiny-grid-column>
      <tiny-grid-column field="created_date" title="创建日期4"></tiny-grid-column>
    </tiny-grid-column>
    <tiny-grid-column title="group5">
      <tiny-grid-column field="employees" title="员工数5"></tiny-grid-column>
      <tiny-grid-column field="created_date" title="创建日期5"></tiny-grid-column>
    </tiny-grid-column>
    <tiny-grid-column title="group6">
      <tiny-grid-column field="employees" title="员工数6"></tiny-grid-column>
      <tiny-grid-column field="created_date" title="创建日期6"></tiny-grid-column>
    </tiny-grid-column>
    <tiny-grid-column title="group7">
      <tiny-grid-column field="employees" title="员工数7"></tiny-grid-column>
      <tiny-grid-column field="created_date" title="创建日期7"></tiny-grid-column>
    </tiny-grid-column>
    <tiny-grid-column title="group8">
      <tiny-grid-column field="employees" title="员工数8"></tiny-grid-column>
      <tiny-grid-column field="created_date" title="创建日期8"></tiny-grid-column>
    </tiny-grid-column>
    <tiny-grid-column title="group9">
      <tiny-grid-column field="employees" title="员工数9"></tiny-grid-column>
      <tiny-grid-column field="created_date" title="创建日期9"></tiny-grid-column>
    </tiny-grid-column>
    <tiny-grid-column title="group10">
      <tiny-grid-column field="employees" title="员工数10"></tiny-grid-column>
      <tiny-grid-column field="created_date" title="创建日期10"></tiny-grid-column>
    </tiny-grid-column>
    <tiny-grid-column title="group11">
      <tiny-grid-column field="employees" title="员工数11"></tiny-grid-column>
      <tiny-grid-column field="created_date" title="创建日期11"></tiny-grid-column>
    </tiny-grid-column>
    <tiny-grid-column title="group12">
      <tiny-grid-column field="employees" title="员工数12"></tiny-grid-column>
      <tiny-grid-column field="created_date" title="创建日期12"></tiny-grid-column>
    </tiny-grid-column>
    <tiny-grid-column title="group13">
      <tiny-grid-column field="employees" title="员工数13"></tiny-grid-column>
      <tiny-grid-column field="created_date" title="创建日期13"></tiny-grid-column>
    </tiny-grid-column>
    <tiny-grid-column title="group14">
      <tiny-grid-column field="employees" title="员工数14"></tiny-grid-column>
      <tiny-grid-column field="created_date" title="创建日期14"></tiny-grid-column>
    </tiny-grid-column>
    <tiny-grid-column title="group15">
      <tiny-grid-column field="employees" title="员工数15"></tiny-grid-column>
      <tiny-grid-column field="created_date" title="创建日期15"></tiny-grid-column>
    </tiny-grid-column>
    <tiny-grid-column title="group16">
      <tiny-grid-column field="employees" title="员工数16"></tiny-grid-column>
      <tiny-grid-column field="created_date" title="创建日期16"></tiny-grid-column>
    </tiny-grid-column>
    <tiny-grid-column title="group17">
      <tiny-grid-column field="employees" title="员工数17"></tiny-grid-column>
      <tiny-grid-column field="created_date" title="创建日期17"></tiny-grid-column>
    </tiny-grid-column>
    <tiny-grid-column title="group18">
      <tiny-grid-column field="employees" title="员工数18"></tiny-grid-column>
      <tiny-grid-column field="created_date" title="创建日期18"></tiny-grid-column>
    </tiny-grid-column>
    <tiny-grid-column title="group19">
      <tiny-grid-column field="employees" title="员工数19"></tiny-grid-column>
      <tiny-grid-column field="created_date" title="创建日期19"></tiny-grid-column>
    </tiny-grid-column>
    <tiny-grid-column title="group20">
      <tiny-grid-column field="employees" title="员工数20"></tiny-grid-column>
      <tiny-grid-column field="created_date" title="创建日期20"></tiny-grid-column>
    </tiny-grid-column>
    <tiny-grid-column field="city" title="城市" fixed="right"></tiny-grid-column>
  </tiny-grid>
</template>

<script setup>
import { ref } from 'vue'
import { Grid as TinyGrid, GridColumn as TinyGridColumn, Modal } from '@opentiny/vue'

const dropConfig = ref({
  // 在设置 scheme 标志位 v2 时，列拖拽使用新方案。不影响行拖拽使用 sortablejs
  scheme: 'v2',
  // 开启列拖拽
  column: true,
  // 可选值：level（同层级拖拽）和 nested（跨层级拖拽），默认值 level
  columnGroup: 'level',
  // 拖拽前处理，返回 false 则阻止拖拽，其它返回值不阻止拖拽。支持异步。
  columnBeforeDrop: ({ dragColumn, dropColumn }) => {
    console.log('columnBeforeDrop', dragColumn, dropColumn)
    return true
  },
  // 可放置列临时样式类
  columnDropClass: 'in-drop'
})
const tableData = ref([
  {
    id: '1',
    name: 'GFD科技有限公司',
    city: '福州',
    employees: 800,
    created_date: '2014-04-30 00:56:00'
  },
  {
    id: '2',
    name: 'WWW科技有限公司',
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
  }
])

function columnDragStart() {
  Modal.message({ message: '列拖拽开始', status: 'info' })
}
function columnDrop() {
  Modal.message({ message: '列拖拽结束', status: 'info' })
}
</script>

<style>
.in-drop {
  outline: 1px dashed rgba(170, 50, 220, 0.6);
  outline-offset: -2px;
}
</style>
