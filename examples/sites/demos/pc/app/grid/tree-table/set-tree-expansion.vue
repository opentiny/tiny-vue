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

<script>
import { TinyGrid, TinyGridColumn, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinyGrid,
    TinyGridColumn,
    TinyButton
  },
  data() {
    const tableData = [
      {
        id: '1',
        pid: '0',
        name: 'GFD 科技 YX 公司',
        area: '华东区',
        employees: '800',
        children: [
          {
            id: '15',
            pid: '1',
            name: 'GFD 科技股份有限子公司',
            area: '华东区',
            employees: '700'
          }
        ]
      },
      {
        id: '2',
        pid: '0',
        name: 'WWWW 科技 YX 公司',
        area: '华南区',
        employees: '500',
        children: [
          {
            id: '22',
            pid: '2',
            name: 'WWWW 科技股份有限子公司',
            area: '华南区',
            employees: '720'
          }
        ]
      },
      {
        id: '4',
        pid: '0',
        name: 'TGBYX 公司',
        area: '华南区',
        employees: '360',
        children: [
          {
            id: '3',
            pid: '4',
            name: 'RFV 有限责任公司',
            area: '华南区',
            employees: '300'
          },
          {
            id: '5',
            pid: '4',
            name: 'YHN 科技 YX 公司',
            area: '华南区',
            employees: '810',
            children: [
              {
                id: '6',
                pid: '5',
                name: 'WSX 科技 YX 公司',
                area: '华南区',
                employees: '800'
              },
              {
                id: '9',
                pid: '5',
                name: 'UJM 有限责任公司',
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
        name: '康康物业 YX 公司',
        area: '华南区',
        employees: '400',
        children: [
          {
            id: '8',
            pid: '7',
            name: '深圳市福德宝网络技术 YX 公司',
            area: '华南区',
            employees: '540'
          },
          {
            id: '10',
            pid: '7',
            name: 'IK 有限责任公司',
            area: '华南区',
            employees: '400',
            children: [
              {
                id: '23',
                pid: '10',
                name: 'IK 有限责任股份 YX 公司',
                area: '华南区',
                employees: '455'
              }
            ]
          }
        ]
      }
    ]

    return {
      tableData
    }
  },
  methods: {
    setTreeExpansion() {
      this.$refs.grid.setTreeExpansion([this.tableData[1], this.tableData[3]], true)
    },
    setAllTreeExpansion() {
      this.$refs.grid.setAllTreeExpansion(true)
    },
    toggleTreeExpansion() {
      this.$refs.grid.toggleTreeExpansion(this.tableData[1])
    }
  }
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
