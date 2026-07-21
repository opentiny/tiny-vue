<template>
  <tiny-grid :data="tableData" @filter-change="filterChangeEvent">
    <tiny-grid-column type="index" width="60"></tiny-grid-column>
    <tiny-grid-column
      field="status"
      title="状态"
      :filter="statusFilter"
      :formatter="statusFormatter"
    ></tiny-grid-column>
    <tiny-grid-column
      field="region"
      title="区域"
      :filter="regionFilter"
      :formatter="regionFormatter"
    ></tiny-grid-column>
  </tiny-grid>
</template>

<script>
import { TinyGrid, TinyGridColumn, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyGrid,
    TinyGridColumn
  },
  data() {
    return {
      tableData: [
        { id: '1', status: 'active', region: 'east' },
        { id: '2', status: 'inactive', region: 'south' },
        { id: '3', status: 'active', region: 'west' },
        { id: '4', status: 'pending', region: 'east' }
      ],
      // 使用 label/value 字段映射：后端返回 code/name，前端显示 name
      statusFilter: {
        multi: true,
        enumable: true,
        inputFilter: false,
        defaultFilter: false,
        label: 'name',
        value: 'code',
        values: [
          { code: 'active', name: '已启用' },
          { code: 'inactive', name: '已停用' },
          { code: 'pending', name: '待审核' }
        ]
      },
      regionFilter: {
        multi: true,
        enumable: true,
        inputFilter: false,
        defaultFilter: false,
        label: 'regionName',
        value: 'regionCode',
        values: [
          { regionCode: 'east', regionName: '华东区' },
          { regionCode: 'south', regionName: '华南区' },
          { regionCode: 'west', regionName: '华西区' }
        ]
      }
    }
  },
  methods: {
    filterChangeEvent({ filters }) {
      TinyModal.message({ message: `筛选条件：${JSON.stringify(filters)}`, status: 'info' })
    },
    statusFormatter({ cellValue }) {
      const map = { active: '已启用', inactive: '已停用', pending: '待审核' }
      return map[cellValue] || cellValue
    },
    regionFormatter({ cellValue }) {
      const map = { east: '华东区', south: '华南区', west: '华西区' }
      return map[cellValue] || cellValue
    }
  }
}
</script>
