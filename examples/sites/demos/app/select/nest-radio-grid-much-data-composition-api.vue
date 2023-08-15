<template>
  <div class="demo-select">
    <tiny-select
      v-model="radioValue"
      value-field="id"
      :multiple="false"
      text-field="city"
      render-type="grid"
      :grid-op="gridOpRadio"
      placeholder="请选择"
      height="200px"
    ></tiny-select>
  </div>
</template>

<script setup lang="jsx">
import { ref, onMounted } from 'vue'
import { Select as TinySelect } from '@opentiny/vue'

const radioValue = ref('')
const gridOpRadio = ref({
  height: 200,
  data: [],
  columns: [
    { type: 'radio', title: '' },
    { field: 'area', title: '区域', width: 90 },
    { field: 'province', title: '省份', width: 60 },
    { field: 'city', title: '城市', width: 60 }
  ]
})

onMounted(() => {
  const arr = []

  for (let i = 0; i <= 800; i++) {
    const obj = {
      id: i,
      area: '华南区' + i,
      province: '广东省',
      city: '广州市'
    }
    arr.push(obj)
  }

  gridOpRadio.value.data = arr
})
</script>

<style scoped>
.demo-select .tiny-select {
  width: 270px;
}
</style>
