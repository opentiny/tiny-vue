<template>
  <div>
    <tiny-grid :data="tableData" :tree-config="{ children: 'children' }">
      <tiny-grid-column field="name" title="公司名称" tree-node></tiny-grid-column>
      <tiny-grid-column field="area" title="区域"></tiny-grid-column>
      <tiny-grid-column field="employees" title="员工数"></tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script setup lang="jsx">
import { ref, onMounted } from 'vue'
import { Grid as TinyGrid, GridColumn as TinyGridColumn } from '@opentiny/vue'

function aggregateTableData(data) {
  const result = []
  data.forEach((item) => {
    if (item.pid === '0') {
      result.push(item)
    } else {
      const parent = data.find((i) => i.id === item.pid)
      if (!parent) return
      if (!parent.children) {
        parent.children = []
      }
      parent.children.push(item)
    }
    delete item.pid
  })
  return result
}

const tableData = ref([
  {
    id: '1',
    pid: '0',
    name: 'GFD科技YX公司',
    area: '华东区',
    employees: '800'
  },
  {
    id: '15',
    pid: '1',
    name: 'GFD科技股份有限子公司',
    area: '华东区',
    employees: '700'
  },
  {
    id: '2',
    pid: '0',
    name: 'WWWW科技YX公司',
    area: '华南区',
    employees: '500'
  },
  {
    id: '22',
    pid: '2',
    name: 'WWWW科技股份有限子公司',
    area: '华南区',
    employees: '720'
  },
  {
    id: '4',
    pid: '0',
    name: 'TGBYX公司',
    area: '华南区',
    employees: '360'
  },
  {
    id: '3',
    pid: '4',
    name: 'RFV有限责任公司',
    area: '华南区',
    employees: '300'
  },
  {
    id: '5',
    pid: '4',
    name: 'YHN科技YX公司',
    area: '华南区',
    employees: '810'
  },
  {
    id: '6',
    pid: '5',
    name: 'WSX科技YX公司',
    area: '华南区',
    employees: '800'
  },
  {
    id: '9',
    pid: '5',
    name: 'UJM有限责任公司',
    area: '华南区',
    employees: '750'
  },
  {
    id: '7',
    pid: '0',
    name: '康康物业YX公司',
    area: '华南区',
    employees: '400'
  },
  {
    id: '8',
    pid: '7',
    name: '深圳市福德宝网络技术YX公司',
    area: '华南区',
    employees: '540'
  },
  {
    id: '10',
    pid: '7',
    name: 'IK有限责任公司',
    area: '华南区',
    employees: '400'
  },
  {
    id: '23',
    pid: '10',
    name: 'IK有限责任股份YX公司',
    area: '华南区',
    employees: '455'
  }
])

onMounted(() => {
  tableData.value = aggregateTableData(tableData.value)
})
</script>
