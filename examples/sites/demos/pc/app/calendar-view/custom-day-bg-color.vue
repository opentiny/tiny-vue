<template>
  <tiny-calendar-view :events="eventslist" :year="2023" :month="5" :set-day-bg-color="setDayBgColor">
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
  },
  methods: {
    setDayBgColor(date) {
      if (date.split('-')[2] === '10') {
        return 'red'
      }else if (date.split('-')[2] === '15') {
        return '#00FF00'
      } else if (date.split('-')[2] === '20') {
        return 'rgb(0,0,255)'
      }else if (date.split('-')[2] === '25') {
        return 'rgba(255,0,0,0.5)'
      }else if( date.split('-')[2] === '5'){
        return 'yellow'
      }else if ( date.split('-')[2] === '8'){
        return 'green'
      }
      return ''
    }
  }
}
</script>
