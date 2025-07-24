<template>
  <tiny-calendar-bar v-model="value"></tiny-calendar-bar>
</template>

<script>
import { TinyCalendarBar } from '@opentiny/vue'

export default {
  components: {
    TinyCalendarBar
  },
  data() {
    return {
      value: '2022-12-18'
    }
  }
}
</script>
