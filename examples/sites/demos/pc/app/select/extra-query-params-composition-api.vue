<template>
  <div class="demo-select">
    <div>父选项：</div>
    <br />
    <tiny-select
      ref="select3"
      v-model="radioValue1"
      :init-query="initQuery1"
      placeholder="请输入关键词"
      clearable
      :remote-method="remoteMethod1"
      :remote-config="{ autoSearch: true, clearData: true, showIcon: true }"
      remote
      filterable
      value-field="id"
      :multiple="true"
      text-field="label"
      render-type="grid"
      :grid-op="gridOpRadio1"
      @change="change"
    ></tiny-select>
    <br />
    <br />
    <div>子选项：</div>
    <br />
    <tiny-select
      ref="select4"
      v-model="radioValue2"
      :init-query="initQuery2"
      placeholder="请输入关键词"
      clearable
      :remote-method="remoteMethod2"
      :remote-config="{ autoSearch: true, clearData: true, showIcon: true }"
      remote
      filterable
      :extra-query-params="extraQueryParams"
      value-field="id"
      :multiple="true"
      text-field="label"
      render-type="grid"
      :grid-op="gridOpRadio2"
    ></tiny-select>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { Select as TinySelect } from '@opentiny/vue'

const parents = ref([])
const children = ref([])
const radioValue1 = ref(['001'])
const radioValue2 = ref(['001'])
const extraQueryParams = ref(null)

const gridOpRadio1 = reactive({
  data: [],
  height: 300,
  optimization: {
    animat: true,
    delayHover: 250,
    scrollX: { gt: 20 },
    scrollY: { gt: 20 }
  },
  columns: [
    { type: 'selection', title: '' },
    { field: 'label', title: '父级' }
  ]
})

const gridOpRadio2 = reactive({
  data: [],
  height: 300,
  optimization: {
    animat: true,
    delayHover: 250,
    scrollX: { gt: 20 },
    scrollY: { gt: 20 }
  },
  columns: [
    { type: 'selection', title: '' },
    { field: 'label', title: '子级' }
  ]
})

parents.value = [
  { id: '001', label: '指南' },
  { id: '002', label: '组件' }
]

children.value = [
  { id: '001', label: '安装', parent: '001' },
  { id: '002', label: '开发', parent: '001' },
  { id: '004', label: '框架风格', parent: '002' },
  { id: '005', label: '表单组件', parent: '002' },
  { id: '006', label: '数据组件', parent: '002' },
  { id: '007', label: '提示组件', parent: '002' },
  { id: '008', label: '导航组件', parent: '002' },
  { id: '009', label: '其他组件', parent: '002' }
]

extraQueryParams.value = radioValue1.value

const initQuery1 = () => {
  return new Promise((resolve) => {
    resolve(parents)
  })
}

const remoteMethod1 = (value) => {
  let res = parents.value.filter((parent) => ~parent.label.indexOf(value || ''))

  return new Promise((resolve) => {
    resolve(res)
  })
}

// init 表示是否是初始化（mounted里面执行为初始化）
const initQuery2 = (value, extraQueryParams, init) => {
  const res = children.value.filter((child) => extraQueryParams.includes(child.parent))

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(res)
    }, 1000)
  })
}

const remoteMethod2 = (value, extraQueryParams) => {
  let child = children.value.filter((child) => extraQueryParams.includes(child.parent))
  const res = child.filter((child) => ~child.label.indexOf(value || ''))

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(res)
    }, 1000)
  })
}

const change = (radioValue1) => {
  extraQueryParams.value = radioValue1

  radioValue2.value = radioValue2.value.filter((value2) => {
    const selected = children.value.find((child) => child.id === value2)

    return radioValue1.includes(selected.parent)
  })
}
</script>

<style lang="less" scoped>
.demo-select .tiny-select {
  width: 270px;
}
</style>
