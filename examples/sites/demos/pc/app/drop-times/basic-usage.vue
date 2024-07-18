<template>
  <div class="drop-time-demo-basic">
    <tiny-drop-times v-model="value" placeholder="请选择" @change="change"></tiny-drop-times>
    <br /><br />
    <p>当前选中值：{{ value }}</p>
  </div>
</template>

<script>
import { DropTimes, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyDropTimes: DropTimes
  },
  data() {
    return {
      value: ''
    }
  },
  methods: {
    change(value) {
      Modal.message({ message: 'change 事件，当前值为 ' + value })
    }
  }
}
</script>

<style scoped>
.drop-time-demo-basic {
  width: 270px;
}
</style>
