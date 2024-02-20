<template>
  <div>
    <tiny-grid
      :data="tableData"
      ref="tree"
      :tree-config="{ children: 'children', ordered: false }"
      :edit-config="{ trigger: 'click', mode: 'cell', showStatus: true }"
      :select-config="{ labelField: 'index', checkField: 'checked' }"
    >
      <tiny-grid-column type="selection" width="100"></tiny-grid-column>
      <tiny-grid-column type="index" width="80"></tiny-grid-column>
      <tiny-grid-column field="name" title="公司名称" tree-node></tiny-grid-column>
      <tiny-grid-column field="area" title="区域" :editor="{ component: 'input', autoselect: true }"></tiny-grid-column>
      <tiny-grid-column
        field="employees"
        title="员工数"
        :editor="{ component: 'input', autoselect: true }"
      ></tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Grid as TinyGrid, GridColumn as TinyGridColumn } from '@opentiny/vue'

const tableData = ref([
  {
    id: '1',
    pid: '0',
    name: 'GFD科技有限公司',
    area: '华东区',
    employees: '800',
    checked: true,
    children: [
      {
        id: '15',
        pid: '1',
        name: 'GFD科技股份有限子公司',
        area: '华东区',
        employees: '700',
        checked: true
      }
    ]
  },
  {
    id: '2',
    pid: '0',
    name: 'WWWW科技有限公司',
    area: '华南区',
    employees: '500',
    checked: false,
    children: [
      {
        id: '22',
        pid: '2',
        name: 'WWWW科技股份有限子公司',
        area: '华南区',
        employees: '720',
        checked: false
      }
    ]
  },
  {
    id: '4',
    pid: '0',
    name: 'TGB有限公司',
    area: '华南区',
    employees: '360',
    checked: false,
    children: [
      {
        id: '3',
        pid: '4',
        name: 'RFV有限责任公司',
        area: '华南区',
        employees: '300',
        checked: false
      },
      {
        id: '5',
        pid: '4',
        name: 'YHN科技有限公司',
        area: '华南区',
        employees: '810',
        checked: false,
        children: [
          {
            id: '6',
            pid: '5',
            name: 'WSX科技有限公司',
            area: '华南区',
            employees: '800',
            checked: false
          },
          {
            id: '9',
            pid: '5',
            name: 'UJM有限责任公司',
            area: '华南区',
            employees: '750',
            checked: false
          }
        ]
      }
    ]
  },
  {
    id: '7',
    pid: '0',
    name: '康康物业有限公司',
    area: '华南区',
    employees: '400',
    checked: false,
    children: [
      {
        id: '8',
        pid: '7',
        name: '深圳市福德宝网络技术有限公司',
        area: '华南区',
        employees: '540',
        checked: false
      },
      {
        id: '10',
        pid: '7',
        name: 'IK有限责任公司',
        area: '华南区',
        employees: '400',
        checked: false,
        children: [
          {
            id: '23',
            pid: '10',
            name: 'IK有限责任股份有限公司',
            area: '华南区',
            employees: '455',
            checked: false
          }
        ]
      }
    ]
  }
])
</script>
