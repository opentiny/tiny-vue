<template>
  <div>
    <tiny-button @click="changeVisible">Show Color select panel</tiny-button>
    <div style="position: relative">
      <tiny-color-select-panel
        alpha
        color-mode="linear-gradient"
        v-model="color"
        :visible="visible"
        @confirm="onConfirm"
        @cancel="hidden"
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
      color: 'linear-gradient(120deg, hsla(334, 80%, 40%, 0.32) 0%,#F48FA2FF 96%)',
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
