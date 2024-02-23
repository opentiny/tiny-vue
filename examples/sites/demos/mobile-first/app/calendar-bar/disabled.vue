<template>
  <tiny-calendar-bar v-model="value" :config="config"></tiny-calendar-bar>
</template>

<script>
import { CalendarBar } from '@opentiny/vue'

export default {
  components: {
    TinyCalendarBar: CalendarBar
  },
  data() {
    return {
      value: '2022-12-18',
      config: {
        disabled: this.disabled,
        disabledColorClass: 'text-color-text-disabled',
        disabledBackgroundColorClass: 'bg-color-bg-3'
      }
    }
  },
  methods: {
    disabled(date) {
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const dat = date.getDate()
      // 禁用12月19号、20号和21号
      if (year === 2022 && month === 12 && ~[19, 20, 21].indexOf(dat)) return true
      // 其他日期不禁用 默认返回falsy值
      return false
    }
  }
}
</script>
