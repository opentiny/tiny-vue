<template>
  <div>
    <tiny-button @click="changeVisible">Show Color select panel</tiny-button>
    <div style="position: relative">
      <tiny-color-select-panel v-model="color" :visible="visible" @confirm="onConfirm" @cancel="onCancel" />
    </div>
  </div>
</template>

<script>
import { ColorSelectPanel, Button, Notify } from '@opentiny/vue'

export default {
  components: {
    TinyColorSelectPanel: ColorSelectPanel,
    TinyButton: Button
  },
  data() {
    return {
      color: '#66ccff',
      visible: false
    }
  },
  methods: {
    changeVisible() {
      this.visible = !this.visible
    },
    hidden() {
      this.visible = false
    },
    onConfirm(hex) {
      Notify({
        type: 'success',
        position: 'top-right',
        title: '用户点击了选择',
        message: hex
      })
      this.hidden()
    },
    onCancel() {
      Notify({
        type: 'error',
        position: 'top-right',
        title: '用户点击了取消'
      })
      this.hidden()
    }
  }
}
</script>
