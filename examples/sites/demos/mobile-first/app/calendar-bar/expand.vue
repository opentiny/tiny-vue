<template>
  <tiny-calendar-bar v-model="value" @expand="expand"></tiny-calendar-bar>
</template>

<script>
import { TinyCalendarBar, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyCalendarBar
  },
  data() {
    return {
      value: '2022-12-18'
    }
  },
  methods: {
    expand(expanded) {
      if (expanded) {
        TinyModal.message('处于展开状态')
      } else {
        TinyModal.message('处于收起状态')
      }
    }
  }
}
</script>
