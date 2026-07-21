<template>
  <p>场景 1：单选</p>
  <br />
  <tiny-grid-select v-model="value" :grid-op="gridOpSingle" value-field="id" text-field="city"></tiny-grid-select>
  <br />
  <br />
  <p>场景 2：多选</p>
  <br />
  <tiny-grid-select
    v-model="value2"
    multiple
    :grid-op="gridOpMulti"
    value-field="id"
    text-field="city"
  ></tiny-grid-select>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { TinyGridSelect } from '@opentiny/vue'

const value = ref('')
const value2 = ref([])
const gridOpSingle = reactive({
  data: [
    { id: '001', area: '华南区', province: '广东省', city: '广州市' },
    { id: '002', area: '华南区', province: '广东省', city: '深圳市' },
    { id: '003', area: '华南区', province: '广东省', city: '珠海市' },
    { id: '004', area: '华南区', province: '广东省', city: '佛山市' },
    { id: '005', area: '华南区', province: '广东省', city: '中山市' }
  ],
  columns: [
    { type: 'radio', title: '' },
    { field: 'area', title: '区域', width: 90 },
    { field: 'province', title: '省份', width: 60 },
    { field: 'city', title: '城市', width: 60 }
  ]
})
const gridOpMulti = reactive({
  data: [
    { id: '001', area: '华南区', province: '广东省', city: '广州市' },
    { id: '002', area: '华南区', province: '广东省', city: '深圳市' },
    { id: '003', area: '华南区', province: '广东省', city: '珠海市' },
    { id: '004', area: '华南区', province: '广东省', city: '佛山市' },
    { id: '005', area: '华南区', province: '广东省', city: '中山市' }
  ],
  columns: [
    { type: 'selection', title: '' },
    { field: 'area', title: '区域', width: 90 },
    { field: 'province', title: '省份', width: 60 },
    { field: 'city', title: '城市', width: 60 }
  ]
})
</script>

<style scoped>
.tiny-grid-select {
  width: 280px;
}
</style>
