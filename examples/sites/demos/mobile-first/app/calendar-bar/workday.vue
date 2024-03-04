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
      value: '2022-10-18',
      config: {
        workday: this.workday,
        holiday: this.holiday,
        workdayColorClass: 'text-color-text-primary',
        holidayColorClass: 'text-color-none-hover'
      }
    }
  },
  methods: {
    workday(date) {
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const dat = date.getDate()
      // 把10月1号到10月7号之间的所有当前月工作日判断为假期（10月1号、2号是周末不会调用到此方法）
      if (year === 2022 && month === 10 && dat >= 1 && dat <= 7) return false
      // 其他当前月工作日 默认返回true
      return true
    },
    holiday(date) {
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const dat = date.getDate()
      // 把10月8号、9号和29号（月末周六）判断为工作日
      if (year === 2022 && month === 10 && ~[8, 9, 29].indexOf(dat)) return false
      // 其他当前月周末 默认返回true
      return true
    }
  }
}
</script>
