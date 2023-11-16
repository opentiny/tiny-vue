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
        mark: this.mark,
        markBackgroundColorClass: 'bg-color-success'
      }
    }
  },
  methods: {
    mark(date) {
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const dat = date.getDate()
      // 标记12月19号有会议
      if (year === 2022 && month === 12 && dat === 19) return 'Meeting'
      // 其他日期没有标记 默认返回falsy值
      return ''
    }
  }
}
</script>
