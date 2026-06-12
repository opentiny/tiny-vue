<template>
  <div>
    <tiny-grid :data="tableData" auto-resize>
      <tiny-grid-column type="index" width="60"></tiny-grid-column>
      <tiny-grid-column type="operation" title="操作" :operation-config="operationConfig"></tiny-grid-column>
      <tiny-grid-column field="name" title="名称"></tiny-grid-column>
      <tiny-grid-column field="area" title="所属区域"></tiny-grid-column>
      <tiny-grid-column field="address" title="地址"></tiny-grid-column>
      <tiny-grid-column field="introduction" title="公司简介" show-overflow></tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script setup>
import { TinyGrid, TinyGridColumn, TinyModal } from '@opentiny/vue'
import { IconAreaChart, IconBarChart, IconDotChart, IconLineChart, IconPieChart } from '@opentiny/vue-icon'
import { ref } from 'vue'

function clickHandler(e, { row, buttonConfig }) {
  TinyModal.message(`点击按钮 - ${row.name} - ${buttonConfig.name}`)
  row.flag = !row.flag
}
function clickHandler2(e, { row, buttonConfig }) {
  TinyModal.message(`点击按钮 - ${row.name} - ${buttonConfig.name}`)
}

const operationConfig = ref({
  buttons: [
    { name: '操作1', icon: IconAreaChart(), click: clickHandler, hidden: (row) => row.flag === true },
    { name: '操作2', icon: IconBarChart(), click: clickHandler, hidden: (row) => row.flag === false },
    {
      name: '操作3',
      icon: IconDotChart(),
      click: clickHandler2,
      disabled: false,
      class: 'fill-color-icon-active text-color-text-placeholder'
    },
    { name: '操作4', icon: IconLineChart(), click: clickHandler2, disabled: () => false },
    { name: '操作5', icon: IconPieChart(), click: clickHandler2, hidden: false }
  ]
})
const tableData = ref([
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
])
</script>
