<template>
  <div>
    <tiny-button @click="changeVisible">Show Color select panel</tiny-button>
    <div style="position: relative">
      <tiny-color-select-panel v-model="color" :visible="visible" @confirm="onConfirm" @cancel="hidden" />
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
      visible: false
    }
  },
  methods: {
    changeVisible() {
      this.visible = !this.visible
    },
    onConfirm(color) {
      console.log(color)
      this.hidden()
    },
    hidden() {
      this.visible = false
    }
  }
}
</script>
