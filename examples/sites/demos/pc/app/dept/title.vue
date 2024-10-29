<template>
  <tiny-dept v-model="value" title="部门"></tiny-dept>
</template>

<script lang="jsx">
import { TinyDept } from '@opentiny/vue'

export default {
  components: {
    TinyDept
  },
  data() {
    return {
      value: '022471'
    }
  }
}
</script>
