<template>
  <div class="demo-select">
    <div>场景1：下拉表格远程搜索初始化查询（单选）</div>
    <br />
    <tiny-base-select
      ref="select"
      v-model="radioValue1"
      placeholder="请输入关键词"
      clearable
      :init-query="initQuery"
      :remote-method="remoteMethod"
      :remote-config="{ autoSearch: true, clearData: true, showIcon: true }"
      remote
      filterable
      value-field="id"
      :multiple="false"
      text-field="city"
      render-type="grid"
      :grid-op="gridOpRadio"
    ></tiny-base-select>
    <br />
    <br />
    <div>场景2：下拉表格远程搜索初始化查询（多选）</div>
    <br />
    <tiny-base-select
      ref="select"
      v-model="radioValue2"
      placeholder="请输入关键词"
      clearable
      :init-query="initQuery"
      :remote-method="remoteMethod"
      :remote-config="{ autoSearch: true, clearData: true, showIcon: true }"
      remote
      filterable
      value-field="id"
      :multiple="true"
      text-field="city"
      render-type="grid"
      :grid-op="gridOpRadio2"
    ></tiny-base-select>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { BaseSelect as TinyBaseSelect } from '@opentiny/vue'

const allData = ref([])
const radioValue1 = ref('001')
const radioValue2 = ref(['001', '002'])

const gridOpRadio = reactive({
  data: [],
  height: 300,
  optimization: {
    animat: true,
    delayHover: 250,
    scrollX: { gt: 20 },
    scrollY: { gt: 20 }
  },
  columns: [
    { type: 'radio', title: '' },
    { field: 'area', title: '区域' },
    { field: 'province', title: '省份' },
    { field: 'city', title: '城市' }
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
    { field: 'area', title: '区域' },
    { field: 'province', title: '省份' },
    { field: 'city', title: '城市' }
  ]
})

allData.value = Array.from({ length: 10000 }, (item, index) => {
  return {
    id: '00' + index,
    area: '华南区' + index,
    province: '广东省' + index,
    city: '广州市' + index
  }
})

const initQuery = (value) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(allData.value)
    }, 500)
  })
}

const remoteMethod = (value) => {
  const filterData = allData.value.filter((item) => {
    return item.city.includes(value)
  })

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(filterData)
    }, 500)
  })
}
</script>

<style lang="less" scoped>
.demo-select {
  .tiny-select {
    width: 280px;
  }
}
</style>
