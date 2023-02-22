<template>
  <div style="width: 270px">
    <tiny-drop-times v-model="value" placeholder="请选择" @change="change"></tiny-drop-times>
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
