<template>
  <tiny-numeric v-model="value" :mouse-wheel="mouseWheel"></tiny-numeric>
</template>

<script lang="ts">
import { TinyNumeric } from '@opentiny/vue'

export default {
  components: {
    TinyNumeric
  },
  data() {
    return {
      value: 1,
      mouseWheel: true
    }
  }
}
</script>
