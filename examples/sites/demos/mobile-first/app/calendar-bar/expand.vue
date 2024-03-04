<template>
  <tiny-calendar-bar v-model="value" @expand="expand"></tiny-calendar-bar>
</template>

<script>
import { CalendarBar, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyCalendarBar: CalendarBar
  },
  data() {
    return {
      value: '2022-12-18'
    }
  },
  methods: {
    expand(expanded) {
      if (expanded) {
        Modal.message('处于展开状态')
      } else {
        Modal.message('处于收起状态')
      }
    }
  }
}
</script>
