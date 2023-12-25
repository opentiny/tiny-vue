<template>
  <div>
    <p>时间：{{ todayValue }}</p>
    <tiny-calendar>
      <template #tool="{ slotScope }">
        <tiny-button @click="toToday(slotScope)">今天</tiny-button>
      </template>
    </tiny-calendar>
  </div>
</template>

<script lang="jsx">
import { Calendar, Button } from '@opentiny/vue'

export default {
  components: {
    TinyCalendar: Calendar,
    TinyButton: Button
  },
  data() {
    return {
      todayValue: ''
    }
  },
  methods: {
    toToday(scope) {
      let year = new Date().getFullYear()
      let month = new Date().getMonth() + 1
      let day = new Date().getDate()
      scope.selectedDate = new Date(year + '-' + month + '-' + day).valueOf()
      this.todayValue = year + '-' + month + '-' + day
    }
  }
}
</script>
