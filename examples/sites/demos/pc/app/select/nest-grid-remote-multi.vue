<template>
  <div>
    <p>场景1：下拉表格远程搜索基础用法</p>
    <tiny-select
      ref="select1"
      v-model="radioValue1"
      placeholder="请输入关键词"
      clearable
      filterable
      remote
      :remote-method="remoteMethod"
      multiple
      reserve-keyword
      value-field="id"
      text-field="city"
      render-type="grid"
      :grid-op="gridOpRadio"
    ></tiny-select>
    <p>场景2：下拉表格远程搜索 + 自动搜索 + 显示按钮</p>
    <tiny-select
      ref="select2"
      v-model="radioValue2"
      multiple
      reserve-keyword
      placeholder="请输入关键词"
      clearable
      filterable
      remote
      :remote-method="remoteMethod"
      :remote-config="{ autoSearch: true, clearData: true, showIcon: true }"
      value-field="id"
      text-field="city"
      render-type="grid"
      :grid-op="gridOpRadio"
    ></tiny-select>
  </div>
</template>

<script>
import { Select } from '@opentiny/vue'

export default {
  components: {
    TinySelect: Select
  },
  created() {
    this.allData = Array.from({ length: 10000 }, (a, i) => {
      return {
        id: '00' + i,
        area: '华南区' + i,
        province: '广东省' + i,
        city: '广州市' + i
      }
    })
  },
  data() {
    return {
      allData: [],
      radioValue1: [],
      radioValue2: [],
      gridOpRadio: {
        data: [],
        height: 300,
        optimization: {
          animat: true,
          delayHover: 250,
          scrollX: { gt: 20 },
          scrollY: { gt: 20 }
        },
        columns: [
          { type: 'selection', title: '' },
          { field: 'area', title: '区域' },
          { field: 'province', title: '省份' },
          { field: 'city', title: '城市' }
        ]
      }
    }
  },
  methods: {
    remoteMethod(value) {
      console.log(value)
      let allData = Array.from({ length: 1000 }, (a, i) => {
        return {
          id: '00' + i,
          area: '华南区' + i,
          province: '广东省' + i,
          city: '广州市' + i
        }
      })

      let filterData = allData.filter((item) => {
        return item.city.includes(value)
      })

      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(filterData)
        }, 500)
      })
    },
    filter(value) {
      return this.allData.filter((item) => {
        return !item.city.includes(value)
      })
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
