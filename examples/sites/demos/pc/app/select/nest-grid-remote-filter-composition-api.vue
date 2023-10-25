<template>
  <div class="demo-select">
    <tiny-select
      ref="select1Ref"
      v-model="radioValue1"
      placeholder="请输入关键词"
      clearable
      :remote-method="remoteMethod"
      remote
      filterable
      value-field="id"
      :multiple="true"
      text-field="city"
      render-type="grid"
      :grid-op="gridOpRadio"
      popper-class="grid-remote"
    ></tiny-select>

    <tiny-select
      ref="select2Ref"
      v-model="radioValue2"
      placeholder="请输入关键词"
      clearable
      :remote-method="remoteMethod"
      :remote-config="{ autoSeach: true, clearData: true, showIcon: true }"
      remote
      filterable
      value-field="id"
      :multiple="true"
      text-field="city"
      render-type="grid"
      :grid-op="gridOpRadio"
      popper-class="grid-remote-config"
    ></tiny-select>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Select as TinySelect } from '@opentiny/vue'

const allData = ref([])
const radioValue1 = ref([])
const radioValue2 = ref([])
const gridOpRadio = ref({
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

allData.value = Array.from({ length: 10000 }, (a, i) => {
  return {
    id: '00' + i,
    area: '华南区' + i,
    province: '广东省' + i,
    city: '广州市' + i
  }
})

function remoteMethod(value) {
  let allData = Array.from({ length: 1000 }, (a, i) => {
    return {
      id: '00' + i,
      area: '华南区' + i,
      province: '广东省' + i,
      city: '广州市' + i
    }
  })

  let filterData = allData.filter((item) => {
    return item.city.includes(value)
  })

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(filterData)
    }, 500)
  })
}

function filter(value) {
  return allData.value.filter((item) => {
    return !item.city.includes(value)
  })
}
</script>

<style scoped>
.demo-select .tiny-select {
  width: 270px;
  display: block;
  margin: 8px;
}
</style>
