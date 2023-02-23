<template>
  <tiny-date-picker v-model="value" type="monthrange" :picker-options="pickerOptions"></tiny-date-picker>
</template>

<script>
import { DatePicker } from '@opentiny/vue'

export default {
  components: {
    TinyDatePicker: DatePicker
  },
  data() {
    return {
      value: '',
      pickerOptions: {
        shortcuts: [
          {
            text: '本月',
            onClick(picker) {
              const date = new Date()
              const tmp = new Date(date.getFullYear(), date.getMonth() + 1, 1, 0, 0, 0)
              const start = new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0)
              const end = new Date(tmp.getTime() - 1)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '今年至今',
            onClick(picker) {
              const date = new Date()
              const start = new Date(date.getFullYear(), 0)
              const end = new Date()
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近六个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setMonth(start.getMonth() - 6)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      }
    }
  }
}
</script>
