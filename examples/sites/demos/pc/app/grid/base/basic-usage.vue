<template>
  <tiny-grid :data="tableData" :edit-config="{ trigger: 'click', mode: 'cell', showStatus: true }">
    <tiny-grid-column type="index" width="60"></tiny-grid-column>
    <tiny-grid-column type="selection" width="60"></tiny-grid-column>
    <tiny-grid-column field="employees" title="员工数"></tiny-grid-column>
    <tiny-grid-column field="createdDate" title="创建日期"></tiny-grid-column>
    <tiny-grid-column field="city" title="城市"></tiny-grid-column>
    <tiny-grid-column
      field="boole"
      title="布尔值"
      align="center"
      format-text="boole"
      :editor="checkboxEdit"
    ></tiny-grid-column>
  </tiny-grid>
</template>

<script lang="jsx">
import { TinyGrid, TinyGridColumn } from '@opentiny/vue'

export default {
  components: {
    TinyGrid,
    TinyGridColumn
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
      op: {
        editConfig: {
          trigger: 'click',
          mode: 'cell',
          showStatus: true
        },
        columns: [
          {
            type: 'index',
            width: 60
          },
          {
            type: 'selection',
            width: 60
          },
          {
            field: 'employees',
            title: '员工数'
          },
          {
            field: 'createdDate',
            title: '创建日期'
          },
          {
            field: 'city',
            title: '城市'
          },
          {
            field: 'boole',
            title: '布尔值',
            align: 'center',
            formatText: 'boole',
            editor: this.checkboxEdit
          }
        ],
        data: tableData
      },
      tableData
    }
  },
  methods: {
    checkboxEdit(h, { row }) {
      return (
        <input
          type="checkbox"
          checked={row.boole}
          onChange={(event) => {
            row.boole = event.target.checked
          }}
        />
      )
    }
  }
}
</script>
