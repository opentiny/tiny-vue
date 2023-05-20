<template>
  <tiny-collapse v-model="activeNames">
    <tiny-collapse-item title="Grid 基本用法" name="1">
      <tiny-grid :data="data" border :edit-config="{ trigger: 'click', mode: 'cell', showStatus: true }">
        <tiny-grid-column type="index" width="60"></tiny-grid-column>
        <tiny-grid-column type="selection" width="60"></tiny-grid-column>
        <tiny-grid-column field="employees" title="员工数"></tiny-grid-column>
        <tiny-grid-column field="created_date" title="创建日期"></tiny-grid-column>
        <tiny-grid-column field="city" title="城市"></tiny-grid-column>
        <tiny-grid-column field="boole" title="布尔值" align="center" format-text="boole" :editor="checkboxEdit"></tiny-grid-column>
      </tiny-grid>
    </tiny-collapse-item>
  </tiny-collapse>
</template>

<script lang="jsx">
import { Collapse, CollapseItem, Grid, GridColumn } from '@opentiny/vue'

export default {
  components: {
    TinyCollapse: Collapse,
    TinyCollapseItem: CollapseItem,
    TinyGrid: Grid,
    TinyGridColumn: GridColumn
  },
  data() {
    return {
      activeNames: ['1'],
      data: [
        {
          id: '1',
          name: 'GFD科技有限公司',
          city: '福州',
          employees: 800,
          created_date: '2014-04-30 00:56:00',
          boole: false
        },
        {
          id: '2',
          name: 'WWW科技有限公司',
          city: '深圳',
          employees: 300,
          created_date: '2016-07-08 12:36:22',
          boole: true
        },
        {
          id: '3',
          name: 'RFV有限责任公司',
          city: '中山',
          employees: 1300,
          created_date: '2014-02-14 14:14:14',
          boole: false
        },
        {
          id: '4',
          name: 'TGB科技有限公司',
          city: '龙岩',
          employees: 360,
          created_date: '2013-01-13 13:13:13',
          boole: true
        },
        {
          id: '5',
          name: 'YHN科技有限公司',
          city: '韶关',
          employees: 810,
          created_date: '2012-12-12 12:12:12',
          boole: true
        }
      ]
    }
  },
  methods: {
    checkboxEdit(h, { row, column }) {
      return (
        <input
          type="checkbox"
          checked={row.boole}
          onChange={(event) => {
            row[column.property] = event.target.checked
          }}
        />
      )
    }
  }
}
</script>
