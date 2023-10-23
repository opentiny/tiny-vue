<template>
  <div>
    <tiny-button @click="showTip"> 手动控制tooltip的显示和隐藏 </tiny-button>
    <tiny-tooltip v-model="showTooltip" content="手动控制模式" :manual="true">
      <tiny-button type="primary"> 手动控制模式 </tiny-button>
    </tiny-tooltip>
  </div>
</template>

<script>
import { Tooltip, Button } from '@opentiny/vue'

export default {
  components: {
    TinyTooltip: Tooltip,
    TinyButton: Button
  },
  data() {
    return {
      showTooltip: false
    }
  },
  methods: {
    showTip() {
      this.showTooltip = !this.showTooltip
    }
  }
}
</script>
