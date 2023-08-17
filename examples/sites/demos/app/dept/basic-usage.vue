<template>
  <tiny-dept v-model="value"></tiny-dept>
</template>

<script lang="jsx">
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
