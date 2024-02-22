<template>
  <div>
    <tiny-button @click="fn" type="primary"> 年月选择器 </tiny-button>
    <p>值：{{ value }}</p>
    <p>格式化值：{{ formatValue }}</p>

    <tiny-date-picker-mobile
      v-model="value"
      title="年月选择"
      type="year-month"
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
      value: '2022-11',
      boxVisibility: false
    }
  },
  computed: {
    formatValue() {
      if (!this.value) return ''
      const date = new Date(this.value)
      return `${date.getFullYear()}/${date.getMonth() + 1}`
    }
  },
  methods: {
    fn() {
      this.boxVisibility = true
    }
  }
}
</script>
