<template>
  <tiny-button @click="btnClick" :reset-time="0">自定义提示框的内容</tiny-button>
</template>

<script lang="jsx">
import { Button, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  },
  methods: {
    btnClick() {
      Modal.alert({
        message: <div style="color: #fa9841">11111</div>
      })
    }
  }
}
</script>
