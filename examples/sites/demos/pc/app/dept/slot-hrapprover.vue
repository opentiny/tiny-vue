<template>
  <div class="demo-dept-class">
    <tiny-dept :value="value">
      <template #hrapprover="data">
        <div>{{ data.slotScope.hrapprover }}</div>
      </template>
    </tiny-dept>
  </div>
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

<style scoped>
.demo-dept-class {
  width: 280px;
}
</style>
