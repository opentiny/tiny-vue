<template>
  <div>
    <tiny-cell :data="formatDatetime(datetime)" @click="datetimeVisibility = true"></tiny-cell>
    <tiny-date-picker-mobile-first
      v-model="datetime"
      type="datetime"
      title="日期时间选择"
      :visible="datetimeVisibility"
      @update:visible="datetimeVisibility = $event"
    >
    </tiny-date-picker-mobile-first>
  </div>
</template>

<script>
import { DatePickerMobileFirst, Cell } from '@opentiny/vue'

export default {
  components: {
    TinyDatePickerMobileFirst: DatePickerMobileFirst,
    TinyCell: Cell
  },
  data() {
    return {
      datetimeVisibility: false,
      datetime: ''
    }
  },
  methods: {
    formatDatetime(value) {
      if (!value) return ''
      const date = new Date(value)
      return this.getFormatDate(date)
    },
    getFormatDate(date) {
      // 格式示例：2020/11/11 12:01:22
      return `${date.getFullYear()}/${this.addZero(date.getMonth() + 1)}/${this.addZero(date.getDate())} ${this.addZero(
        date.getHours()
      )}:${this.addZero(date.getMinutes())}:${this.addZero(date.getSeconds())}`
    },
    addZero(time) {
      return ('0' + time).slice(-2)
    }
  }
}
</script>
