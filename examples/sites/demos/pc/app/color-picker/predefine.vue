<template>
  <div>
    <tiny-color-picker v-model="color" :predefine="predefine" :enable-predefine-color="enablePredefineColor" />
    <br />
    <tiny-button @click="addPredefineColor">Append predefine color</tiny-button>
    <tiny-button @click="popPredefineColor">Pop predefine color</tiny-button>
    <tiny-button @click="enablePredefineColor = !enablePredefineColor">Toggle predefine visibility</tiny-button>
  </div>
</template>

<script>
import { TinyColorPicker, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinyColorPicker,
    TinyButton
  },
  data() {
    return {
      color: '#66ccff',
      predefine: new Array(8).fill(0).map(() => this.randomHex()),
      enablePredefineColor: false
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
