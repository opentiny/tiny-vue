<template>
  <div>
    <tiny-button @click="changeVisible">Show Color select panel</tiny-button>
    <tiny-button @click="addHistoryColor">Append history color</tiny-button>
    <tiny-button @click="popHistoryColor">Pop history color</tiny-button>
    <div style="position: relative">
      <tiny-color-select-panel
        v-model="color"
        :visible="visible"
        @confirm="onConfirm"
        @cancel="onCancel"
        :history="history"
        alpha
      />
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
      visible: false,
      history: ['#66ccff']
    }
  },
  methods: {
    changeVisible() {
      this.visible = !this.visible
    },
    hidden() {
      this.visible = false
    },
    onConfirm(msg) {
      Notify({
        type: 'success',
        position: 'top-right',
        title: '用户点击了选择',
        message: msg
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
    },
    randomHex() {
      return (
        '#' +
        Math.floor(Math.random() * 0xffffff)
          .toString(16)
          .padEnd(6, '0')
      )
    },
    addHistoryColor() {
      this.history.push(this.randomHex())
    },
    popHistoryColor() {
      this.history.pop()
    }
  }
}
</script>
