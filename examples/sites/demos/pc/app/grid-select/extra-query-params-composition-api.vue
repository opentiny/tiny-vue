<template>
  <div class="demo-select">
    <div>父选项：</div>
    <br />
    <tiny-grid-select
      v-model="parentValue"
      multiple
      clearable
      filterable
      remote
      text-field="label"
      value-field="id"
      :grid-op="gridOpParent"
      :init-query="loadParents"
      :remote-method="remoteParents"
      :remote-config="{ autoSearch: true, clearData: true, showIcon: true }"
      @change="handleParentChange"
    ></tiny-grid-select>
    <br /><br />
    <div>子选项：</div>
    <br />
    <tiny-grid-select
      v-model="childValue"
      multiple
      clearable
      filterable
      remote
      text-field="label"
      value-field="id"
      :grid-op="gridOpChild"
      :extra-query-params="parentValue"
      :init-query="loadChildren"
      :remote-method="remoteChildren"
      :remote-config="{ autoSearch: true, clearData: true, showIcon: true }"
    ></tiny-grid-select>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { TinyGridSelect } from '@opentiny/vue'

const parentValue = ref(['001'])
const childValue = ref(['001'])

const parentOptions = [
  { id: '001', label: '指南' },
  { id: '002', label: '组件' }
]

const childOptions = [
  { id: '001', label: '安装', parent: '001' },
  { id: '002', label: '开发', parent: '001' },
  { id: '004', label: '框架风格', parent: '002' },
  { id: '005', label: '表单组件', parent: '002' },
  { id: '006', label: '数据组件', parent: '002' },
  { id: '007', label: '提示组件', parent: '002' },
  { id: '008', label: '导航组件', parent: '002' },
  { id: '009', label: '其他组件', parent: '002' }
]

const gridOpParent = reactive({
  data: [],
  height: 260,
  columns: [
    { type: 'selection', title: '' },
    { field: 'label', title: '父级' }
  ]
})

const gridOpChild = reactive({
  data: [],
  height: 260,
  columns: [
    { type: 'selection', title: '' },
    { field: 'label', title: '子级' }
  ]
})

const loadParents = () => Promise.resolve(parentOptions)
const remoteParents = (keyword) => {
  const list = parentOptions.filter((item) => item.label.includes(keyword || ''))
  return Promise.resolve(list)
}

const loadChildren = (value, extraQueryParams) => filterChildren(extraQueryParams)
const remoteChildren = (keyword, extraQueryParams) => filterChildren(extraQueryParams, keyword)

const filterChildren = (parentIds, keyword = '') =>
  new Promise((resolve) => {
    const list = childOptions
      .filter((child) => parentIds.includes(child.parent))
      .filter((child) => child.label.includes(keyword || ''))
    setTimeout(() => resolve(list), 300)
  })

const handleParentChange = (parents) => {
  const childIds = childOptions
    .filter((child) => parents.includes(child.parent))
    .map((child) => child.id)
  childValue.value = childValue.value.filter((value) => childIds.includes(value))
}
</script>

<style scoped>
.demo-select .tiny-grid-select {
  width: 280px;
}
</style>

