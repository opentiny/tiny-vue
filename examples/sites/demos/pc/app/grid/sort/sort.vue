<template>
  <div>
    <div>
      <tiny-button @click="click">手动排序 sort</tiny-button>
    </div>
    <br />
    <tiny-grid
      :data="tableData"
      ref="grid"
      highlight-current-row
      :edit-config="{ trigger: 'click', mode: 'cell', showStatus: true }"
    >
      <tiny-grid-column type="index" width="60"></tiny-grid-column>
      <tiny-grid-column type="selection" width="60"></tiny-grid-column>
      <tiny-grid-column field="employees" title="员工数" sortable></tiny-grid-column>
      <tiny-grid-column
        field="createdDate"
        :editor="{ component: 'input', autoselect: true }"
        title="创建日期"
      ></tiny-grid-column>
      <tiny-grid-column field="city" :editor="{ component: 'input', autoselect: true }" title="城市"></tiny-grid-column>
      <tiny-grid-column
        field="boole"
        title="布尔值"
        align="center"
        format-text="boole"
        :editor="checkboxEdit"
      ></tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script lang="jsx">
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
        name: 'GFD 科技 YX 公司',
        city: '福州',
        employees: 800,
        createdDate: '2014-04-30 00:56:00',
        boole: false
      },
      {
        id: '2',
        name: 'WWW 科技 YX 公司',
        city: '深圳',
        employees: 300,
        createdDate: '2016-07-08 12:36:22',
        boole: true
      },
      {
        id: '3',
        name: 'RFV 有限责任公司',
        city: '中山',
        employees: 1300,
        createdDate: '2014-02-14 14:14:14',
        boole: false
      },
      {
        id: '4',
        name: 'TGB 科技 YX 公司',
        city: '龙岩',
        employees: 360,
        createdDate: '2013-01-13 13:13:13',
        boole: true
      },
      {
        id: '5',
        name: 'YHN 科技 YX 公司',
        city: '韶关',
        employees: 810,
        createdDate: '2012-12-12 12:12:12',
        boole: true
      },
      {
        id: '6',
        name: 'WSX 科技 YX 公司',
        city: '黄冈',
        employees: 800,
        createdDate: '2011-11-11 11:11:11',
        boole: true
      },
      {
        id: '7',
        name: 'KBG 物业 YX 公司',
        city: '赤壁',
        employees: 400,
        createdDate: '2016-04-30 23:56:00',
        boole: false
      },
      {
        id: '8',
        name: '深圳市福德宝网络技术 YX 公司',
        boole: true,
        city: '厦门',
        createdDate: '2016-06-03 13:53:25',
        employees: 540
      }
    ]

    return {
      tableData
    }
  },
  methods: {
    click() {
      this.$refs.grid.sort('employees', 'asc')
    },
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
