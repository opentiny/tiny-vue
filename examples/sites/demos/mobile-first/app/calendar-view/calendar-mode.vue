<template>
  <tiny-calendar-view
    :show-back-today="false"
    :events="eventslist"
    :year="2023"
    :month="6"
    :modes="['month', 'timeline', 'schedule']"
  >
  </tiny-calendar-view>
</template>

<script>
import { TinyCalendarView } from '@opentiny/vue'

export default {
  components: {
    TinyCalendarView
  },
  data() {
    return {
      eventslist: []
    }
  }
}
</script>
