<template>
  <div>
    <tiny-button @click="fn" type="primary"> 年月选择器 </tiny-button>
    <p>值：{{ value }}</p>
    <p>格式化值：{{ formatValue }}</p>

    <tiny-date-picker-mobile
      v-model="value"
      title="年月选择"
      :picker-options="pickerOptions"
      type="year-month-range"
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
      value: ['2022-11', '2023-1'],
      boxVisibility: false,
      pickerOptions: {
        disabledDate: (date) => {
          return date.getTime() > Date.now() || date.getTime() < new Date('2020/3/1').getTime()
        }
      }
    }
  },
  computed: {
    formatValue() {
      if (!this.value || this.value.length === 0) return ''
      const date1 = new Date(this.value[0])
      const date2 = new Date(this.value[1])
      return `[${date1.getFullYear()}/${date1.getMonth() + 1}, ${date2.getFullYear()}/${date2.getMonth() + 1}]`
    }
  },
  methods: {
    fn() {
      this.boxVisibility = true
    }
  }
}
</script>
