<template>
  <div>
    <tiny-button @click="changeVisible">Show Color select panel</tiny-button>
    <tiny-button @click="addHistoryColor">Append history color</tiny-button>
    <tiny-button @click="popHistoryColor">Pop history color</tiny-button>
    <tiny-button @click="enableHistory = !enableHistory">Toggle History visibility</tiny-button>
    <div style="position: relative">
      <tiny-color-select-panel
        v-model="color"
        :visible="visible"
        @confirm="onConfirm"
        @cancel="onCancel"
        :history="history"
        :enable-history="enableHistory"
        alpha
      />
    </div>
  </div>
</template>

<script>
import { TinyColorSelectPanel, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinyColorSelectPanel,
    TinyButton
  },
  data() {
    return {
      color: '#66ccff',
      visible: false,
      history: [],
      enableHistory: false
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
      this.hidden()
    },
    onCancel() {
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
