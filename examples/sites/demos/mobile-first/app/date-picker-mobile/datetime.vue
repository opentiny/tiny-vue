<template>
  <div class="demo-date-picker-mobile-container">
    <tiny-button @click="fn" type="primary"> 日期时间选择器 </tiny-button>
    <p>值：{{ value }}</p>
    <p>格式化值：{{ formatValue }}</p>

    <tiny-date-picker-mobile
      v-model="value"
      type="datetime"
      title="日期时间选择"
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
      value: '2022/11/02 11:11:11',
      boxVisibility: false
    }
  },
  computed: {
    formatValue() {
      if (!this.value) return ''
      const date = new Date(this.value)
      return this.getFormatDate(date)
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
