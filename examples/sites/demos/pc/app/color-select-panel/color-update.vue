<template>
  <div>
    <tiny-button @click="changeVisible">Show Color select panel</tiny-button>
    <div style="position: relative">
      <tiny-color-select-panel
        v-model="color"
        :visible="visible"
        @color-update="onColorUpdate"
        @confirm="onConfirm"
        @cancel="hidden"
      />
    </div>
  </div>
</template>

<script>
import { TinyColorSelectPanel, TinyButton, TinyNotify } from '@opentiny/vue'

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
    onConfirm() {
      this.hidden()
    },
    hidden() {
      this.visible = false
    },
    onColorUpdate() {
      TinyNotify({
        type: 'success',
        position: 'top-right',
        title: '用户更改了颜色'
      })
    }
  }
}
</script>
