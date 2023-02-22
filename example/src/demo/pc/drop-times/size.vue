<template>
  <div style="width: 270px">
    <tiny-drop-times size="medium" v-model="value" placeholder="请选择"></tiny-drop-times>
    <p>当前选中值：{{ value }}</p>
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
