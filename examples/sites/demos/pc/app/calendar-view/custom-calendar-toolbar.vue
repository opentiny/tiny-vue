<template>
  <tiny-calendar-view>
    <template #tool>
      <p>此处为自定义工具栏插槽</p>
    </template>
  </tiny-calendar-view>
</template>

<script>
import { TinyCalendarView } from '@opentiny/vue'

export default {
  components: {
    TinyCalendarView
  },
  data() {
    return {}
  }
}
</script>
