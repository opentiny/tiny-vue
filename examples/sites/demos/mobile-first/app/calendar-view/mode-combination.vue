<template>
  <tiny-calendar-view :modes="['timeline', 'schedule']" mode="timeline"> </tiny-calendar-view>
</template>

<script>
import { TinyCalendarView } from '@opentiny/vue'

export default {
  components: {
    TinyCalendarView
  },
  methods: {}
}
</script>
