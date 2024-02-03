<template>
  <div>
    <p>场景1：嵌套表格禁用某项（单选）</p>
    <tiny-select
      v-model="value1"
      value-field="id"
      text-field="city"
      render-type="grid"
      :grid-op="gridOpRadio"
      :radio-config="radioConfig"
    ></tiny-select>
    <p>场景2：嵌套表格禁用某项（多选）</p>
    <tiny-select
      v-model="value2"
      value-field="id"
      multiple
      text-field="city"
      render-type="grid"
      :grid-op="gridOp"
      :select-config="selectConfig"
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
      value1: '',
      value2: [],
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

<style lang="less" scoped>
.tiny-select {
  width: 280px;
}
p {
  font-size: 14px;
  line-height: 1.5;
}
</style>
