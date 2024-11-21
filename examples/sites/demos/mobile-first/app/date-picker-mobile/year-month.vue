<template>
  <div class="demo-date-picker-mobile-container">
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
import { TinyDatePickerMobileFirst, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinyDatePickerMobile: TinyDatePickerMobileFirst,
    TinyButton
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
