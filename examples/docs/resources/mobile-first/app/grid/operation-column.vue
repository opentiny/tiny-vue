<template>
  <div>
    <!-- <tiny-radio v-model="viewType" label="default">默认视图</tiny-radio> -->
    <tiny-radio v-model="viewType" label="mf">表格视图</tiny-radio>
    <tiny-radio v-model="viewType" label="card">卡片视图</tiny-radio>
    <tiny-grid :data="tableData" auto-resize :view-type="viewType">
      <tiny-grid-column type="index" width="60"></tiny-grid-column>
      <tiny-grid-column type="operation" title="操作" :operation-config="operationConfig"></tiny-grid-column>
      <tiny-grid-column field="name" title="名称"></tiny-grid-column>
      <tiny-grid-column field="area" title="所属区域"></tiny-grid-column>
      <tiny-grid-column field="address" title="地址"></tiny-grid-column>
      <tiny-grid-column field="introduction" title="公司简介" show-overflow></tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script>
import { Grid, GridColumn, Modal, Radio } from '@opentiny/vue'
import { IconAreaChart, IconBarChart, IconDotChart, IconLineChart, IconPieChart } from '@opentiny/vue-icon'

export default {
  components: {
    TinyGrid: Grid,
    TinyGridColumn: GridColumn,
    TinyRadio: Radio
  },
  methods: {
    clickHandler(e, { row, buttonConfig }) {
      Modal.message(`点击按钮 - ${row.name} - ${buttonConfig.name}`)
      row.flag = !row.flag
    },
    clickHandler2(e, { row, buttonConfig }) {
      Modal.message(`点击按钮 - ${row.name} - ${buttonConfig.name}`)
    }
  },
  data() {
    return {
      viewType: 'card',
      operationConfig: {
        buttons: [
          { name: '操作1', icon: IconAreaChart(), click: this.clickHandler, hidden: (row) => row.flag === true },
          { name: '操作2', icon: IconBarChart(), click: this.clickHandler, hidden: (row) => row.flag === false },
          {
            name: '操作3',
            icon: IconDotChart(),
            click: this.clickHandler2,
            disabled: false,
            class: 'fill-color-icon-active text-color-text-placeholder'
          },
          { name: '操作4', icon: IconLineChart(), click: this.clickHandler2, disabled: (row) => false },
          { name: '操作5', icon: IconPieChart(), click: this.clickHandler2, hidden: false }
        ]
      },
      tableData: [
        {
          id: '1',
          name: 'GFD科技有限公司',
          area: '华东区',
          address: '福州',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
          flag: true
        },
        {
          id: '2',
          name: 'WWWW科技有限公司',
          area: '华南区',
          address: '深圳福田区',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
          flag: true
        },
        {
          id: '3',
          name: 'RFV有限责任公司',
          area: '华南区',
          address: '中山市',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
          flag: true
        }
      ]
    }
  }
}
</script>
