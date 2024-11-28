<template>
  <tiny-grid-select
    v-model="value"
    multiple
    :grid-op="gridOpMultiple"
    value-field="id"
    text-field="city"
  ></tiny-grid-select>
</template>

<script>
import { TinyGridSelect } from '@opentiny/vue'

export default {
  components: {
    TinyGridSelect
  },
  data() {
    return {
      value: [],
      gridOpMultiple: {
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
      }
    }
  }
}
</script>

<style scoped>
.tiny-grid-select {
  width: 280px;
}
</style>
