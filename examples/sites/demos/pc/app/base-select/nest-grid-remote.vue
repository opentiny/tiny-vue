<template>
  <div>
    <p>场景1：单选，下拉表格远程搜索基础用法</p>
    <tiny-base-select
      v-model="value1"
      placeholder="请输入关键词"
      render-type="grid"
      filterable
      remote
      :remote-method="remoteMethod"
      :grid-op="gridOpRadio"
    ></tiny-base-select>

    <p>场景2：单选，下拉表格远程搜索 + 自动搜索 + 显示按钮</p>
    <tiny-base-select
      v-model="value2"
      placeholder="请输入关键词"
      render-type="grid"
      filterable
      remote
      :remote-method="remoteMethod"
      :grid-op="gridOpRadio"
      :remote-config="{ autoSearch: true, clearData: true, showIcon: true }"
    ></tiny-base-select>

    <p>场景3：多选，下拉表格远程搜索基础用法</p>
    <tiny-base-select
      v-model="value3"
      placeholder="请输入关键词"
      multiple
      render-type="grid"
      reserve-keyword
      filterable
      remote
      :remote-method="remoteMethod"
      :grid-op="gridOpMultiple"
    ></tiny-base-select>

    <p>场景4：多选，下拉表格远程搜索 + 自动搜索 + 显示按钮</p>
    <tiny-base-select
      v-model="value4"
      placeholder="请输入关键词"
      multiple
      reserve-keyword
      filterable
      remote
      render-type="grid"
      :remote-method="remoteMethod"
      :grid-op="gridOpMultiple"
      :remote-config="{ autoSearch: true, clearData: true, showIcon: true }"
    ></tiny-base-select>
  </div>
</template>

<script>
import { BaseSelect } from '@opentiny/vue'

export default {
  components: {
    TinyBaseSelect: BaseSelect
  },
  created() {
    this.allData = Array.from({ length: 1000 }, (a, i) => {
      return {
        value: '00' + i,
        province: '省份' + i,
        city: '城市' + i,
        area: '区域' + i,
        label: `省${i}-市${i}`
      }
    })
  },
  data() {
    const baseGridOp = {
      data: [],
      height: 300,
      optimization: {
        animat: true,
        delayHover: 250,
        scrollX: { gt: 20 },
        scrollY: { gt: 20 }
      }
    }
    const baseCols = [
      {
        field: 'province',
        title: '省份'
      },
      { field: 'city', title: '城市' },
      {
        field: 'area',
        title: '区域'
      }
    ]
    return {
      allData: [],
      value1: '',
      value2: '',
      value3: [],
      value4: [],
      gridOpRadio: {
        ...baseGridOp,
        columns: [{ type: 'radio', title: '' }, ...baseCols]
      },
      gridOpMultiple: {
        ...baseGridOp,
        columns: [{ type: 'selection', title: '' }, ...baseCols]
      }
    }
  },
  methods: {
    remoteMethod(value) {
      const filterData = this.filter(value)

      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(filterData)
        }, 500)
      })
    },
    filter(value) {
      return this.allData.filter((item) => item.city.includes(value))
    }
  }
}
</script>

<style scoped>
.tiny-select {
  width: 280px;
}
p {
  font-size: 14px;
  line-height: 1.5;
}
</style>
