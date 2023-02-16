<template>
  <div>
    <tiny-button @click="click">setAllTreeExpansion</tiny-button>
    <tiny-grid :data="tableData" ref="grid" :tree-config="{ children: 'children' }">
      <tiny-grid-column type="selection" width="100" tree-node></tiny-grid-column>
      <tiny-grid-column field="name" title="公司名称"></tiny-grid-column>
      <tiny-grid-column field="area" title="区域"></tiny-grid-column>
      <tiny-grid-column field="employees" title="员工数"></tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script>
import { Grid, GridColumn, Button } from '@opentiny/vue'

export default {
  components: {
    TinyGrid: Grid,
    TinyGridColumn: GridColumn,
    TinyButton: Button
  },
  data() {
    const tableData = [
      {
        id: '1',
        pid: '0',
        name: 'GFD科技公司',
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
        name: 'WWWW科技公司',
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
        name: 'TGB公司',
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
            name: 'YHN科技公司',
            area: '华南区',
            employees: '810',
            children: [
              {
                id: '6',
                pid: '5',
                name: 'WSX科技公司',
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
        name: '康康物业公司',
        area: '华南区',
        employees: '400',
        children: [
          {
            id: '8',
            pid: '7',
            name: 'SZ市福德宝网络技术公司',
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
                name: 'IK有限责任股份公司',
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
    click() {
      this.$refs.grid.setAllTreeExpansion(true)
    }
  }
}
</script>
