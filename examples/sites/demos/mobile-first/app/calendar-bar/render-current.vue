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
        currentColorClass: 'text-color-text-inverse',
        currentBackgroundColorClass: 'bg-color-success'
      }
    }
  }
}
</script>
