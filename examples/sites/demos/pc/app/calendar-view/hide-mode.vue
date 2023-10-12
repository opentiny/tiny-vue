<template>
  <tiny-calendar-view :modes="[]"> </tiny-calendar-view>
</template>

<script>
import { CalendarView } from '@opentiny/vue'

export default {
  components: {
    TinyCalendarView: CalendarView
  }
}
</script>
