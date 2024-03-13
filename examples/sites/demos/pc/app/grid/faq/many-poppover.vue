<template>
  <tiny-grid :data="tableData">
    <tiny-grid-column type="index" width="60"></tiny-grid-column>
    <tiny-grid-column type="selection" width="60"></tiny-grid-column>
    <tiny-grid-column field="employees" title="员工数"></tiny-grid-column>
    <tiny-grid-column field="created_date" title="创建日期">
      <template #default="{ row }">
        <tiny-popover
          v-model="flag"
          placement="bottom"
          width="400"
          :content="row.created_date"
          popper-class="pagination-popover"
          trigger="manual"
        >
          <template #reference>
            <div @click="flag = !flag">1233</div>
          </template>
        </tiny-popover>
      </template>
    </tiny-grid-column>
    <tiny-grid-column
      field="city"
      title="城市名称很长很长城市名称很长很长城市名称很长很长城市名称很长很长城市名称很长很长城市名称很长很长"
      show-overflow="tooltip"
      show-header-overflow="tooltip"
    ></tiny-grid-column>
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
import { Grid, GridColumn, Popover } from '@opentiny/vue'

export default {
  components: {
    TinyGrid: Grid,
    TinyGridColumn: GridColumn,
    TinyPopover: Popover
  },
  data() {
    return {
      flag: false,
      tableData: [
        {
          id: '1',
          name: 'GFD科技有限公司',
          city: '福州很长很长福州很长很长福州很长很长福州很长很长福州很长很长福州很长很长福州很长很长福州很长很长',
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
