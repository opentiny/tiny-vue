<template>
  <tiny-calendar-view :modes="['timeline', 'schedule']" mode="timeline"> </tiny-calendar-view>
</template>

<script>
import { CalendarView } from '@opentiny/vue'

export default {
  components: {
    TinyCalendarView: CalendarView
  },
  methods: {}
}
</script>
