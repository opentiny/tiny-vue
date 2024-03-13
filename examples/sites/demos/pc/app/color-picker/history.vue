<template>
  <div>
    <tiny-color-picker v-model="color" :history="history" />
    <tiny-button @click="addHistoryColor">Append history color</tiny-button>
    <tiny-button @click="popHistoryColor">Pop history color</tiny-button>
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
      history: []
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
    addHistoryColor() {
      let colorDefine = this.randomHex()
      this.history.push(colorDefine)
    },
    popHistoryColor() {
      this.history.pop()
    }
  }
}
</script>
