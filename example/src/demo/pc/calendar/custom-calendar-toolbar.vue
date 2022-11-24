<template>
  <tiny-calendar>
    <template #tool="{ slotScope }">
      <tiny-button @click="toToday(slotScope)">今天</tiny-button>
    </template>
  </tiny-calendar>
</template>

<script>
import { Calendar, Button } from '@opentiny/vue'

export default {
  components: {
    TinyCalendar: Calendar,
    TinyButton: Button
  },
  methods: {
    toToday(scope) {
      let year = new Date().getFullYear()
      let month = new Date().getMonth() + 1
      let day = new Date().getDate()
      scope.selectedDate = new Date(year + '-' + month + '-' + day).valueOf()
    }
  }
}
</script>
