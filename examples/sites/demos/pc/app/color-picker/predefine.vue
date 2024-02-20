<template>
  <div>
    <tiny-color-picker v-model="color" :predefine="predefine" />
    <tiny-button @click="addPredefineColor">Append predefine color</tiny-button>
    <tiny-button @click="popPredefineColor">Pop predefine color</tiny-button>
  </div>
</template>

<script>
import { ColorPicker, Button } from '@opentiny/vue'

export default {
  components: {
    TinyColorPicker: ColorPicker,
    TinyButton: Button
  },
  data() {
    return {
      color: '#66ccff',
      predefine: new Array(8).fill(0).map(() => this.randomHex())
    }
  },
  methods: {
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
