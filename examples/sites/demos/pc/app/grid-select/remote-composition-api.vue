<template>
  <div>
    <p>场景 1：单选</p>
    <br />
    <tiny-grid-select
      v-model="valueSingle"
      :grid-op="gridOpSingle"
      filterable
      remote
      :remote-method="remoteMethod"
    ></tiny-grid-select>
    <br /><br />
    <p>场景 2：多选</p>
    <br />
    <tiny-grid-select
      v-model="valueMultiple"
      :grid-op="gridOpMultiple"
      multiple
      filterable
      remote
      :remote-method="remoteMethod"
    ></tiny-grid-select>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { TinyGridSelect } from '@opentiny/vue'

const valueSingle = ref('')
const valueMultiple = ref([])

const gridOpSingle = reactive({
  data: [],
  height: 300,
  columns: [
    { type: 'radio', title: '' },
    { field: 'area', title: '区域', width: 90 },
    { field: 'province', title: '省份', width: 60 },
    { field: 'city', title: '城市', width: 60 }
  ]
})

const gridOpMultiple = reactive({
  data: [],
  height: 300,
  columns: [
    { type: 'selection', title: '' },
    { field: 'area', title: '区域', width: 90 },
    { field: 'province', title: '省份', width: 60 },
    { field: 'city', title: '城市', width: 60 }
  ]
})

const allData = Array.from({ length: 1000 }, (a, i) => {
  return {
    value: '00' + i,
    province: '省份' + i,
    city: '城市' + i,
    area: '区域' + i,
    label: `省${i}-市${i}`
  }
})

const filter = (value) => {
  return allData.filter((item) => item.city.includes(value))
}

const remoteMethod = (value) => {
  const filterData = filter(value)

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(filterData)
    }, 500)
  })
}
</script>

<style scoped>
.tiny-grid-select {
  width: 280px;
}
</style>
