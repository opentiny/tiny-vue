<template>
  <tiny-date-picker v-model="value" type="daterange" :picker-options="pickerOptionsDateRange"></tiny-date-picker>
</template>

<script>
import { DatePicker } from '@opentiny/vue'

export default {
  components: {
    TinyDatePicker: DatePicker
  },
  data() {
    return {
      value: [],
      pickerOptionsDateRange: {
        shortcuts: [
          {
            text: '某日起始', // text可以自定义
            type: 'startFrom'
          },
          {
            text: '某日为止', // text可以自定义
            type: 'endAt'
          },
          {
            text: '自定义结束日期',
            type: 'startFrom',
            endDate: new Date('2030-10-10') // 传入的日期必须为一个日期对象
          },
          {
            text: '自定义开始日期',
            type: 'endAt',
            startDate: new Date('2000-10-10') // 传入的日期必须为一个日期对象
          }
        ]
      }
    }
  }
}
</script>
