<template>
  <div class="demo">
    <tiny-search-box v-model="tags" :items="items" @change="onChange" />
  </div>
</template>

<script>
import TinySearchBox from '@opentiny/vue-search-box'

export default {
  components: {
    TinySearchBox
  },
  data() {
    // 获取当前时间
    const now = new Date()
    // 获取一年的毫秒数：设置只能选择一年的时间区间
    const year = 365 * 24 * 60 * 60 * 1000
    // 获取半年的毫秒数：设置只能选择半年的时间区间
    const halfYear = (365 / 2) * 24 * 3600 * 1000
    // 获取一天的毫秒数
    const day = 24 * 60 * 60 * 1000

    return {
      tags: [],
      items: [
        {
          label: '日期',
          field: 'date',
          type: 'dateRange',
          format: 'yyyy/MM/dd', // 默认格式
          // 默认开始时间
          start: new Date(),
          // 默认结束时间
          end: undefined,
          maxTimeLength: year, // 可选择的时间跨度为一年内
          // 最小时间（当前时间前5天）
          min: new Date(now.getTime() - 5 * day),
          // 最大时间（当前时间后1年2个月）
          max: new Date(now.getTime() + year + 2 * 30 * day)
        },
        {
          label: '时间日期',
          field: 'datetime',
          type: 'datetimeRange',
          format: 'yyyy/MM/dd HH:mm:ss', // 默认格式
          // 最小时间（当前时间前半年）
          // min: new Date(now.getTime() - halfYear),
          // 最大时间（当前时间后半年）
          // max: new Date(now.getTime() + halfYear),
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
