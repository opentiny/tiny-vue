<template>
  <div class="demo-select">
    <tiny-select
      v-model="value"
      class="grid-select"
      value-field="id"
      :multiple="true"
      text-field="city"
      render-type="grid"
      :grid-op="gridOp"
      :select-config="selectConfig"
      placeholder="请选择"
    ></tiny-select>
    <tiny-select
      v-model="radioValue"
      class="grid-radio"
      value-field="id"
      :multiple="false"
      text-field="city"
      render-type="grid"
      :grid-op="gridOpRadio"
      :radio-config="radioConfig"
      placeholder="请选择"
    ></tiny-select>
  </div>
</template>

<script>
import { Select } from '@opentiny/vue'

export default {
  components: {
    TinySelect: Select
  },
  data() {
    return {
      selectConfig: {
        checkMethod({ rowIndex }) {
          return rowIndex % 2 === 0
        }
      },
      radioConfig: {
        checkMethod({ rowIndex }) {
          return rowIndex % 2 === 1
        }
      },
      value: '',
      radioValue: '',
      gridOpRadio: {
        data: [
          { id: '001', area: '华南区', province: '广东省', city: '广州市' },
          { id: '002', area: '华南区', province: '广东省', city: '深圳市' },
          { id: '003', area: '华南区', province: '广东省', city: '珠海市' },
          { id: '004', area: '华南区', province: '广东省', city: '佛山市' },
          { id: '005', area: '华南区', province: '广东省', city: '中山市' }
        ],
        columns: [
          { type: 'radio', title: '' },
          { field: 'area', title: '区域', width: 100 },
          { field: 'province', title: '省份', width: 50 },
          { field: 'city', title: '城市' }
        ]
      },
      gridOp: {
        data: [
          { id: '001', area: '华南区', province: '广东省', city: '广州市' },
          { id: '002', area: '华南区', province: '广东省', city: '深圳市' },
          { id: '003', area: '华南区', province: '广东省', city: '珠海市' },
          { id: '004', area: '华南区', province: '广东省', city: '佛山市' },
          { id: '005', area: '华南区', province: '广东省', city: '中山市' }
        ],
        columns: [
          { type: 'selection', title: '' },
          { field: 'area', title: '区域', width: 100 },
          { field: 'province', title: '省份', width: 50 },
          { field: 'city', title: '城市' }
        ]
      }
    }
  }
}
</script>

<style scoped>
.demo-select .tiny-select {
  width: 270px;
  display: block;
  margin: 8px;
}
</style>
