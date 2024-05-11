<template>
  <tiny-grid :columns="columns" :data="tableData"></tiny-grid>
</template>

<script lang="jsx">
import { Grid } from '@opentiny/vue'

export default {
  components: {
    TinyGrid: Grid
  },
  data() {
    return {
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
          title: '员工数',
          slots: {
            default: ({ row }, h) => <span style="color: #1476FF;cursor: pointer;">{row.employees}</span>,
            header: ({ column }, h) => <span style="color: #1476FF;cursor: pointer;">{column.title + 2}</span>
          }
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
      tableData: [
        {
          id: '1',
          name: 'GFD科技YX公司',
          city: '福州',
          employees: 800,
          createdDate: '2014-04-30 00:56:00',
          boole: false
        },
        {
          id: '2',
          name: 'WWW科技YX公司',
          city: '深圳',
          employees: 300,
          createdDate: '2016-07-08 12:36:22',
          boole: true
        }
      ]
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
