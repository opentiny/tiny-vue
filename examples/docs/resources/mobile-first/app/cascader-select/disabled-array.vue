<template>
  <div date-tag="tiny-demo">
    <tiny-button @click="showCascader">点击显示级联选择</tiny-button>
    <tiny-cascader-select
      v-model="value"
      :options="optionList"
      :visible="visible"
      @update:visible="visible = $event"
      :disabled="disabled"
    ></tiny-cascader-select>
  </div>
</template>

<script>
import { CascaderSelect, Button } from '@opentiny/vue'

export default {
  components: {
    TinyCascaderSelect: CascaderSelect,
    TinyButton: Button
  },
  data() {
    return {
      visible: false,
      value: [2023, 1],
      optionList: [years, months]
    }
  },
  methods: {
    showCascader() {
      this.visible = true
    },
    disabled(value, focusYear, focusMonth) {
      // 禁用日期 2023-2 的月份
      if (focusYear === 2023 && value === 2) return true
      // 禁用日期 2024 的年份
      if (value === 2024) return true
      // 其它选项不禁用，默认返回falsy值
      return false
    }
  }
}

const years = [
  { id: 2000, label: '2000年' },
  { id: 2001, label: '2001年' },
  { id: 2002, label: '2002年' },
  { id: 2003, label: '2003年' },
  { id: 2004, label: '2004年' },
  { id: 2005, label: '2005年' },
  { id: 2006, label: '2006年' },
  { id: 2007, label: '2007年' },
  { id: 2008, label: '2008年' },
  { id: 2009, label: '2009年' },
  { id: 2010, label: '2010年' },
  { id: 2011, label: '2011年' },
  { id: 2012, label: '2012年' },
  { id: 2013, label: '2013年' },
  { id: 2014, label: '2014年' },
  { id: 2015, label: '2015年' },
  { id: 2016, label: '2016年' },
  { id: 2017, label: '2017年' },
  { id: 2018, label: '2018年' },
  { id: 2019, label: '2019年' },
  { id: 2020, label: '2020年' },
  { id: 2021, label: '2021年' },
  { id: 2022, label: '2022年' },
  { id: 2023, label: '2023年' },
  { id: 2024, label: '2024年' },
  { id: 2025, label: '2025年' },
  { id: 2026, label: '2026年' },
  { id: 2027, label: '2027年' },
  { id: 2028, label: '2028年' },
  { id: 2029, label: '2029年' },
  { id: 2030, label: '2030年' },
  { id: 2031, label: '2031年' },
  { id: 2032, label: '2032年' },
  { id: 2033, label: '2033年' },
  { id: 2034, label: '2034年' },
  { id: 2035, label: '2035年' },
  { id: 2036, label: '2036年' },
  { id: 2037, label: '2037年' },
  { id: 2038, label: '2038年' },
  { id: 2039, label: '2039年' },
  { id: 2040, label: '2040年' },
  { id: 2041, label: '2041年' },
  { id: 2042, label: '2042年' },
  { id: 2043, label: '2043年' },
  { id: 2044, label: '2044年' },
  { id: 2045, label: '2045年' },
  { id: 2046, label: '2046年' },
  { id: 2047, label: '2047年' },
  { id: 2048, label: '2048年' },
  { id: 2049, label: '2049年' },
  { id: 2050, label: '2050年' }
]

const months = [
  { id: 1, label: '1月' },
  { id: 2, label: '2月' },
  { id: 3, label: '3月' },
  { id: 4, label: '4月' },
  { id: 5, label: '5月' },
  { id: 6, label: '6月' },
  { id: 7, label: '7月' },
  { id: 8, label: '8月' },
  { id: 9, label: '9月' },
  { id: 10, label: '10月' },
  { id: 11, label: '11月' },
  { id: 12, label: '12月' }
]
</script>
