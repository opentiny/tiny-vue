<template>
  <div class="demo-select">
    <tiny-select
      ref="selectRef"
      v-model="radioValue"
      :filter-method="filter"
      clearable
      filterable
      value-field="id"
      :multiple="false"
      text-field="city"
      render-type="grid"
      :grid-op="gridOpRadio"
    ></tiny-select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Select as TinySelect } from '@opentiny/vue'

const radioValue = ref('')
const gridOpRadio = ref({
  data: [
    { id: '001', area: '华南区', province: '广东省', city: '深圳1' },
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

const filter = (value) => {
  if (!value) {
    return gridOpRadio.value.data
  }

  return gridOpRadio.value.data.filter((item) => {
    return item.city.includes(value)
  })
}
</script>

<style scoped>
.demo-select .tiny-select {
  width: 270px;
}
</style>
