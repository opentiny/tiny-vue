<template>
  <tiny-calendar-view
    :events="eventslist"
    :year="2023"
    :month="5"
    @prev-week-click="prevWeekClick"
    @next-week-click="nextWeekClick"
    @week-change="weekChange"
    @year-change="yearChange"
    @month-change="monthChange"
    @mode-change="modeChange"
  >
  </tiny-calendar-view>
</template>

<script>
import { TinyCalendarView, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyCalendarView
  },
  data() {
    return {
      eventslist: []
    }
  },
  methods: {
    prevWeekClick(date) {
      TinyModal.message({ message: `上一周按钮点击事件： ${date[0].value}`, status: 'info' })
    },
    nextWeekClick(date) {
      TinyModal.message({ message: `下一周按钮点击事件： ${date[0].value}`, status: 'info' })
    },
    weekChange(weekDate) {
      TinyModal.message({ message: `周改变事件： ${weekDate[0].value}`, status: 'info' })
    },
    yearChange(newVal, oldVal) {
      TinyModal.message({ message: `年改变事件：${newVal}年，${oldVal}年`, status: 'info' })
    },
    monthChange(newVal, oldVal) {
      TinyModal.message({ message: `月改变事件：${newVal}月，${oldVal}月`, status: 'info' })
    },
    modeChange(val) {
      TinyModal.message({ message: `模式切换事件：${val}`, status: 'info' })
    }
  }
}
</script>
