<template>
  <div>
    <tiny-button @click="changeVisible">Show Color select panel</tiny-button>
    <tiny-button @click="addPredefineColor">Append predefine color</tiny-button>
    <tiny-button @click="popPredefineColor">Pop predefine color</tiny-button>
    <div style="position: relative">
      <tiny-color-select-panel
        v-model="color"
        :visible="visible"
        @confirm="onConfirm"
        @cancel="onCancel"
        :predefine="predefine"
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
      predefine: new Array(8).fill(0).map(() => this.randomHex())
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
    addPredefineColor() {
      this.predefine.push(this.randomHex())
    },
    popPredefineColor() {
      this.predefine.pop()
    }
  }
}
</script>
