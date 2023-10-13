<template>
  <tiny-calendar-view>
    <template #tool>
      <p>此处为自定义工具栏插槽</p>
    </template>
  </tiny-calendar-view>
</template>

<script>
import { CalendarView } from '@opentiny/vue'

export default {
  components: {
    TinyCalendarView: CalendarView
  },
  data() {
    return {}
  }
}
</script>
