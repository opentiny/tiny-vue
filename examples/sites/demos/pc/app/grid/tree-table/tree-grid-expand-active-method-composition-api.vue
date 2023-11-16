<template>
  <tiny-grid
    :data="tableData"
    :tree-config="{ trigger: 'row', children: 'children', hideMethod: hideTree }"
    :resizable="false"
  >
    <tiny-grid-column type="index" width="60"></tiny-grid-column>
    <tiny-grid-column field="name" title="公司名称" tree-node></tiny-grid-column>
    <tiny-grid-column field="area" title="区域"></tiny-grid-column>
    <tiny-grid-column field="employees" title="员工数"></tiny-grid-column>
  </tiny-grid>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Grid as TinyGrid, GridColumn as TinyGridColumn } from '@opentiny/vue'

const tableData = ref([
  {
    id: '1',
    pid: '0',
    name: 'GFD科技有限公司',
    area: '华东区',
    employees: '800',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
    children: [
      {
        id: '3',
        pid: '1',
        name: 'GFD科技股份有限子公司',
        area: '华东区',
        employees: '700',
        introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
        children: [
          {
            id: '5',
            pid: '1',
            name: '不展示改行',
            area: '华南区',
            employees: '720',
            introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
          }
        ]
      }
    ]
  },
  {
    id: '2',
    pid: '0',
    name: 'WWWW科技有限公司',
    area: '华南区',
    employees: '500',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
    children: [
      {
        id: '4',
        pid: '2',
        name: 'WWWW科技股份有限子公司',
        area: '华南区',
        employees: '720',
        introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
      }
    ]
  }
])

// 可以使用数据行row和行级别rowLevel控制是否渲染树表行
const hideTree = (row, rowLevel) => {
  // 行级别为2的行不渲染
  return rowLevel === 2
}
</script>
