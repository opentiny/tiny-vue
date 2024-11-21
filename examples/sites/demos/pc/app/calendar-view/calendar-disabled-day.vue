<template>
  <tiny-calendar-view :events="eventslist" :year="2023" :month="5" :disabled="disabled"> </tiny-calendar-view>
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
  },
  methods: {
    disabled(date) {
      return date.split('-')[2] < 15
    }
  }
}
</script>
