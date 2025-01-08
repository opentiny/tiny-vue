<template>
  <tiny-grid ref="gridRef" :data="tableData" show-overflow="tooltip">
    <tiny-grid-column type="index" width="60"></tiny-grid-column>
    <tiny-grid-column field="name" title="名称" :renderer="renderInput('name')">
      <template #header="{ column }">
        <i class="tiny-icon tiny-grid-required-icon"></i>
        <span>{{ column.title }}</span>
      </template>
    </tiny-grid-column>
    <tiny-grid-column field="area" title="区域" :renderer="renderSelect('area')"></tiny-grid-column>
    <tiny-grid-column field="address" title="地址" :renderer="renderInput('address')"></tiny-grid-column>
    <tiny-grid-column field="introduction" title="公司简介" :renderer="renderInput('introduction')"></tiny-grid-column>
    <tiny-grid-column title="操作" width="200" align="center">
      <template #default="{ row }">
        <template v-if="row.editing">
          <tiny-button size="mini" @click="row.editing = false"> 保存 </tiny-button>
          <tiny-button size="mini" @click="row.editing = false"> 取消 </tiny-button>
        </template>
        <template v-else>
          <tiny-button size="mini" @click="row.editing = true"> 编辑 </tiny-button>
        </template>
      </template>
    </tiny-grid-column>
  </tiny-grid>
</template>

<script setup>
import { ref } from 'vue'
import { TinyGrid, TinyGridColumn, TinyInput, TinySelect, TinyButton } from '@opentiny/vue'

const options = ref([
  { label: '华北区', value: '华北区' },
  { label: '华东区', value: '华东区' },
  { label: '华南区', value: '华南区' }
])
const tableData = ref([
  {
    id: '1',
    name: 'GFD 科技有限公司',
    area: '华东区',
    address: '福州',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。',
    editing: true
  },
  {
    id: '2',
    name: 'WWWW 科技有限公司',
    area: '华南区',
    address: '深圳福田区',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。',
    editing: true
  },
  {
    id: '3',
    name: 'RFV 有限责任公司',
    area: '华南区',
    address: '中山市',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。',
    editing: false
  },
  {
    id: '4',
    name: 'TGB 有限公司',
    area: '华北区',
    address: '梅州',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。',
    editing: false
  },
  {
    id: '5',
    name: 'YHN 科技有限公司',
    area: '华南区',
    address: '韶关',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。',
    editing: false
  },
  {
    id: '6',
    name: '康康物业有限公司',
    area: '华北区',
    address: '广州天河区',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。',
    editing: false
  }
])

function renderInput(field) {
  return (h, { row }) =>
    row.editing
      ? h(TinyInput, {
          props: { modelValue: row[field] },
          on: { 'update:modelValue': (value) => (row[field] = value) }
        })
      : h('span', row[field])
}

function renderSelect(field) {
  return (h, { row }) =>
    row.editing
      ? h(TinySelect, {
          props: { modelValue: row[field], options: options.value, textField: 'label', valueField: 'value' },
          on: { 'update:modelValue': (value) => (row[field] = value) }
        })
      : h('span', row[field])
}
</script>
