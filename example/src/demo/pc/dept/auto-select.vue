<template>
  <tiny-dept v-model="value" :auto-select="false"></tiny-dept>
</template>

<script>
import { Dept } from '@opentiny/vue'

export default {
  components: {
    TinyDept: Dept
  },
  data() {
    return {
      value: '022471'
    }
  }
}
</script>
