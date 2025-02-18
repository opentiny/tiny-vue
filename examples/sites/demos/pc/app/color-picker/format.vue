<template>
  <div>
    <div style="position: relative">
      <p>颜色值：{{ color }}</p>
      <tiny-color-picker
        v-model="color"
        :visible="visible"
        @confirm="onConfirm"
        @cancel="onCancel"
        :predefine="predefine"
        :format="options"
      />
    </div>
  </div>
</template>

<script>
import { TinyColorPicker } from '@opentiny/vue'

export default {
  components: {
    TinyColorPicker
  },
  data() {
    return {
      color: 'rgb(102,204,255)',
      visible: false,
      predefine: new Array(8).fill(0).map(() => this.randomHex()),
      options: ['rgb', 'hex', 'hsl', 'hsv']
    }
  },
  methods: {
    changeVisible() {
      this.visible = !this.visible
    },
    hidden() {
      this.visible = false
    },
    onConfirm() {
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
