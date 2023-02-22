<template>
  <tiny-grid :data="tableData" :resizable="true" border>
    <template #toolbar>
      <tiny-grid-toolbar id="custom-sort-columns" :resizable="{ storage: true }" :setting="setting"></tiny-grid-toolbar>
    </template>
    <tiny-grid-column type="index" width="40"></tiny-grid-column>
    <tiny-grid-column type="selection" width="40"></tiny-grid-column>
    <tiny-grid-column field="name" title="名称 (PopEditor)" sortable></tiny-grid-column>
    <tiny-grid-column field="userId" title="创始人 (UserLink)"></tiny-grid-column>
    <tiny-grid-column field="employees" title="员工数 (Numeric)" sortable></tiny-grid-column>
    <tiny-grid-column field="address" title="地址 (Dropdown)" sortable></tiny-grid-column>
    <tiny-grid-column field="ipaddress" title="IP地址 (IpAddress)" sortable></tiny-grid-column>
  </tiny-grid>
</template>

<script>
import { Grid, GridColumn, GridToolbar } from '@opentiny/vue'
import Sortable from 'sortablejs'

export default {
  components: {
    TinyGrid: Grid,
    TinyGridColumn: GridColumn,
    TinyGridToolbar: GridToolbar
  },
  data() {
    return {
      Sortable,
      setting: {
        storage: 'local',
        sortable: Sortable,
        rowClassName({ row }) {
          return row.property === 'name' ? 'row-warning' : ''
        },
        onBeforeMove(type, row) {
          return row.property !== 'ipaddress'
        },
        filter: '.row-warning'
      },
      tableData: [
        {
          id: '1',
          name: 'GFD科技YX公司',
          address: '福州',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
          employees: 800
        },
        {
          id: '2',
          name: 'WWW科技YX公司',
          address: '深圳福田区',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
          employees: 300
        },
        {
          id: '3',
          name: 'RFV有限责任公司',
          address: '中山市',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
          employees: 1300
        },
        {
          id: '4',
          name: 'TGB科技YX公司',
          address: '龙岩',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
          employees: 360
        },
        {
          id: '5',
          name: 'YHN科技YX公司',
          address: '韶关',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
          employees: 810
        },
        {
          id: '6',
          name: 'WSX科技YX公司',
          address: '黄冈',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
          employees: 800
        }
      ]
    }
  }
}
</script>

<style lang="css">
.row-warning {
  background-color: #faad14 !important;
}
</style>
