<template>
  <div>
    <tiny-select
      v-model="value"
      :multiple="false"
      :grid-op="gridOp"
      :update-delay="500"
      :remote-method="remoteMethodInGrid"
      :remote-config="{
        autoSearch: true,
        clearData: true,
        showIcon: true
      }"
      text-field="area"
      value-field="id"
      remote
      render-type="grid"
      is-drop-inherit-width
      filterable
      clearable
      height="300px"
      collapse-tags
      init-label="华南区"
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
      value: '001',
      gridOp: {
        data: [],
        columns: [
          { type: 'radio', title: '', width: 60 },
          { field: 'id', title: 'id', width: 60 },
          { field: 'area', title: '区域', width: 120 },
          { field: 'province', title: '省份', width: 120 },
          { field: 'city', title: '城市', width: 120 }
        ]
      },
      options: [
        { id: '001', area: '华南区', province: '广东省', city: '深圳1' },
        { id: '002', area: '华东区', province: '广东省', city: '深圳市' },
        { id: '003', area: '华北区', province: '广东省', city: '珠海市' },
        { id: '004', area: '华北区', province: '广东省', city: '佛山市' },
        { id: '005', area: '华南区', province: '广东省', city: '中山市' }
      ]
    }
  },
  methods: {
    remoteMethodInGrid() {
      return new Promise((resolve) => {
        resolve(this.options)
      })
    }
  }
}
</script>
