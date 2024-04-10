<template>
  <tiny-grid :data="tableData">
    <tiny-grid-column type="index" width="60"></tiny-grid-column>
    <tiny-grid-column
      field="rate"
      title="内置列渲染rate1"
      format-text="rate"
      :format-config="{ fraction: 4, max: 10 }"
    ></tiny-grid-column>
    <tiny-grid-column
      field="rate"
      title="内置列渲染rate2"
      format-text="rate"
      :format-config="{ fraction: 4, total: 10 }"
    ></tiny-grid-column>
    <tiny-grid-column
      field="rate1"
      title="自定义渲染rate"
      format-text="rate"
      :format-config="{ rateMethod }"
    ></tiny-grid-column>
  </tiny-grid>
</template>

<script>
import { Grid, GridColumn } from '@opentiny/vue'

export default {
  components: {
    TinyGrid: Grid,
    TinyGridColumn: GridColumn
  },
  data() {
    return {
      tableData: [
        { id: '1', rate: 2, rate1: 0 },
        { id: '2', rate: 0.65555, rate1: 0.65555 },
        { id: '3', rate: 0.3445, rate1: 0.3445 },
        { id: '4', rate: 0.0005, rate1: 0.0005 },
        { id: '5', rate: 0.6005, rate1: 0.6005 },
        { id: '6', rate: 0.06005, rate1: 0.06005 }
      ]
    }
  },
  methods: {
    rateMethod(value) {
      let str = (parseFloat(value) * 1000000).toString(10)
      str = '000000'.slice(0, 6 - str.length) + str

      let int = str.slice(0, 2)
      int = int.replace(/^0+/, '')
      int = int === '' ? '0' : int

      const dec = str.slice(2)

      return `${int}.${dec}%`
    }
  }
}
</script>
