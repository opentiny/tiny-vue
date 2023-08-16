<template>
  <tiny-dept :value="value" size="medium">
    <template #hrapprover="data">
      <div>{{ data.slotScope.hrapprover }}</div>
    </template>
  </tiny-dept>
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
