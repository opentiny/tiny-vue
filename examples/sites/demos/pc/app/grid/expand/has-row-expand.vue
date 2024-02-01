<template>
  <div>
    <tiny-grid ref="expandGrid" :data="tableData" @toggle-expand-change="handleExpand">
      <tiny-grid-column type="index" width="60"></tiny-grid-column>
      <tiny-grid-column type="expand" width="60">
        <template #default="data">
          <ul>
            <li>
              <span>公司名称：</span>
              <span>{{ data.row.name }}</span>
            </li>
            <li>
              <span>区域：</span>
              <span>{{ data.row.area }}</span>
            </li>
            <li>
              <span>员工数：</span>
              <span>{{ data.row.employees }}</span>
            </li>
            <li>
              <span>公司简介：</span>
              <span>{{ data.row.introduction }}</span>
            </li>
          </ul>
        </template>
      </tiny-grid-column>
      <tiny-grid-column field="name" title="公司名称"></tiny-grid-column>
      <tiny-grid-column field="area" title="区域"></tiny-grid-column>
      <tiny-grid-column field="employees" title="员工数"></tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script lang="jsx">
import { Grid, GridColumn, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyGrid: Grid,
    TinyGridColumn: GridColumn
  },
  data() {
    return {
      tableData: [
        {
          id: '1',
          pid: '0',
          name: 'GFD科技YX公司',
          area: '华东区',
          employees: '800',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '2',
          pid: '0',
          name: 'WWWW科技YX公司',
          area: '华南区',
          employees: '500',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '4',
          pid: '0',
          name: 'TGBYX公司',
          area: '华南区',
          employees: '360',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '7',
          pid: '0',
          name: '康康物业YX公司',
          area: '华南区',
          employees: '400',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        }
      ]
    }
  },
  methods: {
    handleExpand({ row, rowIndex }) {
      if (this.$refs.expandGrid.hasRowExpand(row)) {
        Modal.message({
          message: `当前展开行：${JSON.stringify(rowIndex + 1)}`,
          status: 'info'
        })
      }
    }
  }
}
</script>
