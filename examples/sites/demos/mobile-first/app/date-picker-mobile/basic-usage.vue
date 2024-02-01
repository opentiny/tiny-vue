<template>
  <div>
    <tiny-button @click="fn" type="primary"> 日期选择器组件 </tiny-button>
    <p>值：{{ value }}</p>
    <p>格式化值：{{ formatValue }}</p>

    <tiny-date-picker-mobile
      v-model="value"
      title="日期选择"
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
      value: '',
      boxVisibility: false
    }
  },
  computed: {
    formatValue() {
      if (!this.value) return ''
      const date = new Date(this.value)
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    }
  },
  methods: {
    fn() {
      this.boxVisibility = true
    }
  }
}
</script>
