<template>
  <div class="drop-time-demo-sse">
    <tiny-drop-times v-model="value" placeholder="请选择" :start="60" :step="5" :end="720"></tiny-drop-times>
  </div>
</template>

<script>
import { DropTimes } from '@opentiny/vue'

export default {
  components: {
    TinyDropTimes: DropTimes
  },
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style scoped>
.drop-time-demo-sse {
  width: 270px;
}
</style>
