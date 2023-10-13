<template>
  <div style="width: 270px">
    <tiny-drop-times
      v-model="value"
      placeholder="请选择"
      :end="720"
      :start="60"
      :step="5"
      @change="change"
    ></tiny-drop-times>
  </div>
</template>

<script lang="jsx">
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
