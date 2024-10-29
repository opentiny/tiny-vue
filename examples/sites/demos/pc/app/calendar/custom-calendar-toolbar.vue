<template>
  <tiny-calendar>
    <template #tool="{ slotScope }">
      <tiny-button @click="toToday(slotScope)">今天</tiny-button>
    </template>
  </tiny-calendar>
</template>

<script>
import { TinyCalendar, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinyCalendar,
    TinyButton
  },
  methods: {
    toToday(scope) {
      let year = new Date().getFullYear()
      let month = new Date().getMonth()
      let day = new Date().getDate()
      scope.selectedDate = new Date(year, month, day).valueOf()
    }
  }
}
</script>
