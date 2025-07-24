<template>
  <div>
    <p>{{ enablePredefineColor }}</p>
    <tiny-button @click="changeVisible">Show Color select panel</tiny-button>
    <tiny-button @click="addPredefineColor">Append predefine color</tiny-button>
    <tiny-button @click="popPredefineColor">Pop predefine color</tiny-button>
    <tiny-button @click="enablePredefineColor = !enablePredefineColor">Toggle Predefine color visibility</tiny-button>
    <div style="position: relative">
      <tiny-color-select-panel
        v-model="color"
        :visible="visible"
        @confirm="onConfirm"
        @cancel="onCancel"
        :predefine="predefine"
        :enable-predefine-color="enablePredefineColor"
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
      predefine: new Array(8).fill(0).map(() => this.randomHex()),
      enablePredefineColor: false
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
    addPredefineColor() {
      this.predefine.push(this.randomHex())
    },
    popPredefineColor() {
      this.predefine.pop()
    }
  }
}
</script>
