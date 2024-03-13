<template>
  <div>
    <tiny-button @click="changeVisible">Show Color select panel</tiny-button>
    <div style="position: relative">
      <tiny-color-select-panel v-model="color" :visible="visible" @confirm="hidden" @cancel="hidden" />
    </div>
  </div>
</template>

<script>
import { ColorSelectPanel, Button } from '@opentiny/vue'

export default {
  components: {
    TinyColorSelectPanel: ColorSelectPanel,
    TinyButton: Button
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
    hidden() {
      this.visible = false
    }
  }
}
</script>
