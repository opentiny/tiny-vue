<template>
  <div>
    <tiny-button @click="fn" type="primary"> 日期选择器组件 </tiny-button>
    <p>值：{{ value }}</p>
    <p>格式化值：{{ formatValue }}</p>

    <tiny-date-picker-mobile
      v-model="value"
      title="日期时间选择"
      type="datetimerange"
      :visible="boxVisibility"
      @update:visible="boxVisibility = $event"
    >
    </tiny-date-picker-mobile>
  </div>
</template>

<script>
import { DatePickerMobileFirst, Button } from '@opentiny/vue'

export default {
  components: {
    TinyDatePickerMobile: DatePickerMobileFirst,
    TinyButton: Button
  },
  data() {
    return {
      value: ['2022/11/02 11:11:11', '2022/11/05 00:00:01'],
      boxVisibility: false
    }
  },
  computed: {
    formatValue() {
      if (!this.value || this.value.length === 0) return ''
      const date1 = new Date(this.value[0])
      const date2 = new Date(this.value[1])
      return `[${this.getFormatDate(date1)}, ${this.getFormatDate(date2)}]`
    }
  },
  methods: {
    fn() {
      this.boxVisibility = true
    },
    addZero(time) {
      return ('0' + time).slice(-2)
    },
    getFormatDate(date) {
      // 格式示例：2020/11/11 12:01:22
      return `${date.getFullYear()}/${this.addZero(date.getMonth() + 1)}/${this.addZero(date.getDate())} ${this.addZero(
        date.getHours()
      )}:${this.addZero(date.getMinutes())}:${this.addZero(date.getSeconds())}`
    }
  }
}
</script>
