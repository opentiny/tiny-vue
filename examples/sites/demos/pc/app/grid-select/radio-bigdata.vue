<template>
  <div id="radio-bigdata">
    <tiny-grid-select
      v-model="value"
      text-field="city"
      value-field="id"
      :grid-op="gridOp"
    ></tiny-grid-select>
  </div>
</template>

<script>
import { TinyGridSelect } from '@opentiny/vue'

export default {
  components: {
    TinyGridSelect
  },
  data() {
    return {
      value: '',
      gridOp: {
        height: 220,
        data: [],
        columns: [
          { type: 'radio', width: 50 },
          { field: 'area', title: '区域', width: 120 },
          { field: 'province', title: '省份' },
          { field: 'city', title: '城市' }
        ]
      }
    }
  },
  mounted() {
    const data = Array.from({ length: 800 }, (item, index) => ({
      id: `ID_${index}`,
      area: `华南区 ${index}`,
      province: '广东省',
      city: `广州市 ${index}`
    }))
    this.gridOp.data = data
    window.gridSelectRadioBigData = data.length
  }
}
</script>

<style scoped>
.tiny-grid-select {
  width: 280px;
}
</style>

