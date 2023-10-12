<template>
  <tiny-grid
    :data="tableData"
    border
    table-layout="auto"
    show-overflow
    show-header-overflow
    :edit-config="{ trigger: 'click', mode: 'cell', showStatus: true }"
  >
    <tiny-grid-column title="操作" header-align="center">
      <tiny-grid-column type="index" width="40"></tiny-grid-column>
      <tiny-grid-column type="selection" width="60"></tiny-grid-column>
    </tiny-grid-column>
    <tiny-grid-column :title="renderHeaderDescription" header-align="center">
      <tiny-grid-column field="test" title="test1"></tiny-grid-column>
      <tiny-grid-column field="test" title="test2"></tiny-grid-column>
      <tiny-grid-column field="test" title="test3"></tiny-grid-column>
      <tiny-grid-column field="test" title="test4"></tiny-grid-column>
      <tiny-grid-column field="test" title="test5"></tiny-grid-column>
      <tiny-grid-column field="test" title="test6"></tiny-grid-column>
      <tiny-grid-column field="test" title="test7"></tiny-grid-column>
      <tiny-grid-column field="test" title="test8"></tiny-grid-column>
      <tiny-grid-column field="test" title="test9"></tiny-grid-column>
    </tiny-grid-column>
    <tiny-grid-column :title="renderHeaderRelation" header-align="center">
      <tiny-grid-column field="test" title="test10"></tiny-grid-column>
      <tiny-grid-column field="test" title="test11"></tiny-grid-column>
      <tiny-grid-column field="test" title="test12"></tiny-grid-column>
      <tiny-grid-column field="test" title="test13"></tiny-grid-column>
      <tiny-grid-column field="test" title="test14"></tiny-grid-column>
      <tiny-grid-column field="test" title="test15"></tiny-grid-column>
      <tiny-grid-column field="test" title="test16"></tiny-grid-column>
      <tiny-grid-column field="test" title="test17"></tiny-grid-column>
      <tiny-grid-column field="test" title="test18"></tiny-grid-column>
      <tiny-grid-column field="test" title="test19"></tiny-grid-column>
      <tiny-grid-column field="test" title="test20"></tiny-grid-column>
    </tiny-grid-column>
  </tiny-grid>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Grid as TinyGrid, GridColumn as TinyGridColumn } from '@opentiny/vue'
import { iconAdministrator, iconVersiontree } from '@opentiny/vue-icon'

const IconVersiontree = iconVersiontree()
const IconAdministrator = iconAdministrator()
const tableData = ref([
  {
    id: '1',
    test: '华东区'
  },
  {
    id: '2',
    test: '华南区'
  },
  {
    id: '3',
    test: '华南区'
  },
  {
    id: '4',
    test: '华北区'
  },
  {
    id: '5',
    test: '华南区'
  },
  {
    id: '6',
    test: '华北区'
  }
])

function renderHeaderDescription(h) {
  return (
    <span>
      {' '}
      <IconAdministrator />
      Description
    </span>
  )
}

function renderHeaderRelation(h) {
  return (
    <span>
      <IconVersiontree />
    </span>
  )
}
</script>
