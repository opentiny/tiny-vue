<template>
  <div>
    <p>颜色值：{{ color }}</p>
    <tiny-button @click="changeVisible"> Toggle </tiny-button>
    <div style="position: relative">
      <tiny-color-select-panel
        v-model="color"
        :visible="visible"
        @confirm="onConfirm"
        @cancel="onCancel"
        :format="options"
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
      color: 'rgb(102,204,255)',
      visible: false,
      predefine: new Array(8).fill(0).map(() => this.randomHex()),
      options: ['hex', 'rgb', 'hsl', 'hsv'],
      value: 'rgb'
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
    }
  }
}
</script>
