<template>
  <div>
    <div>
      <tiny-button @click="setTreeExpansion">展开指定树节点</tiny-button>
      <tiny-button @click="setAllTreeExpansion">展开所有树节点</tiny-button>
      <tiny-button @click="toggleTreeExpansion">切换展开树节点</tiny-button>
    </div>
    <br />
    <tiny-grid :data="tableData" ref="grid" :tree-config="{ children: 'children' }">
      <tiny-grid-column type="selection" width="40"></tiny-grid-column>
      <tiny-grid-column field="name" title="公司名称" tree-node></tiny-grid-column>
      <tiny-grid-column field="area" title="区域"></tiny-grid-column>
      <tiny-grid-column field="employees" title="员工数"></tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Grid as TinyGrid, GridColumn as TinyGridColumn, Button as TinyButton } from '@opentiny/vue'

const tableData = ref([
  {
    id: '1',
    pid: '0',
    name: 'GFD科技YX公司',
    area: '华东区',
    employees: '800',
    children: [
      {
        id: '15',
        pid: '1',
        name: 'GFD科技股份有限子公司',
        area: '华东区',
        employees: '700'
      }
    ]
  },
  {
    id: '2',
    pid: '0',
    name: 'WWWW科技YX公司',
    area: '华南区',
    employees: '500',
    children: [
      {
        id: '22',
        pid: '2',
        name: 'WWWW科技股份有限子公司',
        area: '华南区',
        employees: '720'
      }
    ]
  },
  {
    id: '4',
    pid: '0',
    name: 'TGBYX公司',
    area: '华南区',
    employees: '360',
    children: [
      {
        id: '3',
        pid: '4',
        name: 'RFV有限责任公司',
        area: '华南区',
        employees: '300'
      },
      {
        id: '5',
        pid: '4',
        name: 'YHN科技YX公司',
        area: '华南区',
        employees: '810',
        children: [
          {
            id: '6',
            pid: '5',
            name: 'WSX科技YX公司',
            area: '华南区',
            employees: '800'
          },
          {
            id: '9',
            pid: '5',
            name: 'UJM有限责任公司',
            area: '华南区',
            employees: '750'
          }
        ]
      }
    ]
  },
  {
    id: '7',
    pid: '0',
    name: '康康物业YX公司',
    area: '华南区',
    employees: '400',
    children: [
      {
        id: '8',
        pid: '7',
        name: '深圳市福德宝网络技术YX公司',
        area: '华南区',
        employees: '540'
      },
      {
        id: '10',
        pid: '7',
        name: 'IK有限责任公司',
        area: '华南区',
        employees: '400',
        children: [
          {
            id: '23',
            pid: '10',
            name: 'IK有限责任股份YX公司',
            area: '华南区',
            employees: '455'
          }
        ]
      }
    ]
  }
])
const grid = ref('grid')

const setTreeExpansion = () => {
  grid.value.setTreeExpansion([tableData.value[1], tableData.value[3]], true)
}
const setAllTreeExpansion = () => {
  grid.value.setAllTreeExpansion(true)
}
const toggleTreeExpansion = () => {
  grid.value.toggleTreeExpansion(tableData.value[1])
}
</script>

<style scoped lang="less">
:deep(.tiny-grid) {
  &-header__column,
  &-body__column {
    &.col__selection,
    &.col__radio {
      padding: 0 8px 0 16px;
      & + th,
      + td {
        padding-left: 0;
      }
    }
  }
}
</style>
