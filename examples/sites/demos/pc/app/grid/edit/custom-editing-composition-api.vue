<template>
  <tiny-grid
    :data="tableData"
    seq-serial
    show-overflow="tooltip"
    :edit-config="{
      trigger: 'click',
      mode: 'cell',
      showStatus: true,
      activeMethod
    }"
  >
    <tiny-grid-column type="index" width="60"></tiny-grid-column>
    <tiny-grid-column field="name" title="名称" :editor="{ component: 'input', autoselect: true }"></tiny-grid-column>
    <tiny-grid-column field="area" title="区域" :editor="{ component: 'select', options }"></tiny-grid-column>
    <tiny-grid-column
      field="createdDate"
      title="创建时间"
      :editor="{
        component: 'input',
        attrs: { type: 'date' },
        autoselect: true
      }"
    ></tiny-grid-column>
    <tiny-grid-column
      field="employees"
      title="人数"
      :editor="{
        component: 'input',
        attrs: { type: 'number' },
        autoselect: true
      }"
    ></tiny-grid-column>
    <tiny-grid-column
      field="introduction"
      title="公司简介"
      :editor="{ component: 'input', autoselect: true }"
      show-overflow="ellipsis"
    ></tiny-grid-column>
  </tiny-grid>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyGrid, TinyGridColumn } from '@opentiny/vue'

const options = ref([
  { label: '华北区', value: '华北区' },
  { label: '华东区', value: '华东区' },
  { label: '华南区', value: '华南区' }
])
const tableData = ref([
  {
    id: '1',
    name: 'GFD 科技 YX 公司',
    area: '华东区',
    address: '福州',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。',
    employees: 300,
    createdDate: '2016-07-08 12:36:22'
  },
  {
    id: '2',
    name: 'WWWW 科技 YX 公司',
    area: '华南区',
    address: '深圳福田区',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。',
    employees: 1300,
    createdDate: '2014-02-14 14:14:14'
  },
  {
    id: '3',
    name: 'RFV 有限责任公司',
    area: '华南区',
    address: '中山市',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。',
    employees: 360,
    createdDate: '2013-01-13 13:13:13'
  },
  {
    id: '4',
    name: 'TGBYX 公司',
    area: '华北区',
    address: '梅州',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。',
    employees: 810,
    createdDate: '2012-12-12 12:12:12'
  },
  {
    id: '5',
    name: 'YHN 科技 YX 公司',
    area: '华南区',
    address: '韶关',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。',
    employees: 300,
    createdDate: '2016-07-08 12:36:22'
  },
  {
    id: '6',
    name: '康康物业 YX 公司',
    area: '华北区',
    address: '广州天河区',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。',
    employees: 800,
    createdDate: '2011-11-11 11:11:11'
  }
])

// 自定义编辑，如：不允许编辑 area = 华东区 的单元格
function activeMethod({ row }) {
  return row.area !== '华东区'
}
</script>
