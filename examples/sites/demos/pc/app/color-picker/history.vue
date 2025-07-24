<template>
  <div>
    <tiny-color-picker v-model="color" :history="history" :enable-history="enableHistory" />
    <br />
    <tiny-button @click="addHistoryColor">Append history color</tiny-button>
    <tiny-button @click="popHistoryColor">Pop history color</tiny-button>
    <tiny-button @click="enableHistory = !enableHistory">Toggle History visibility</tiny-button>
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
      history: [],
      enableHistory: false
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
