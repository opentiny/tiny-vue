<template>
  <tiny-calendar-view :events="eventslist" :year="2023" :month="6" :modes="['month', 'timeline', 'schedule']">
  </tiny-calendar-view>
</template>

<script>
import { CalendarView } from '@opentiny/vue'

export default {
  components: {
    TinyCalendarView: CalendarView
  },
  data() {
    return {
      eventslist: []
    }
  }
}
</script>
