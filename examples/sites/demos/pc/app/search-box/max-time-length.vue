<template>
  <div class="demo">
    <tiny-search-box v-model="tags" :items="items" @change="onChange" />
  </div>
</template>

<script>
import TinySearchBox from "@opentiny/vue-search-box";

export default {
  components: {
    TinySearchBox
  },
  data() {
    // 获取一年的毫秒数：设置只能选择一年的时间区间
    const year = new Date('2024-06-07').getTime() - new Date('2023-06-07').getTime()
    // 获取半年的毫秒数：设置只能选择半年的时间区间
    const halfYear = (365 / 2) * 24 * 3600 * 1000
    
    return {
      tags: [],
      items: [
        {
          label: '日期',
          field: 'date',
          type: 'dateRange',
          format: 'yyyy/MM/dd', // 默认格式
          // 默认开始时间
          start: new Date(2024, 3, 10),
          // 默认结束时间
          end: undefined,
          maxTimeLength: year, // 可选择的时间跨度为一年内
          // 最小时间
          min: new Date(2024, 3, 5),
          // 最大时间
          max: new Date(2025, 5, 5)
        },
        {
          label: '时间日期',
          field: 'datetime',
          type: 'datetimeRange',
          format: 'yyyy/MM/dd HH:mm:ss', // 默认格式
          // 最小时间
          // min: new Date(2024, 3, 5),
          // 最大时间
          // max: new Date(2024, 9, 5),
          maxTimeLength: halfYear // 可选择的时间跨度为半年内
        }
      ]
    }
  },
  methods: {
    onChange(newFilters, oldFilters) {
      console.log('changeEvent:', newFilters, oldFilters)
    }
  }
}
</script>

