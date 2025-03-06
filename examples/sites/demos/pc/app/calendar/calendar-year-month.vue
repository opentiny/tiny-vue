<template>
  <tiny-calendar :year="2000" :month="5" />
</template>

<script>
import { TinyCalendar } from '@opentiny/vue'

export default {
  components: {
    TinyCalendar
  }
}
</script>
