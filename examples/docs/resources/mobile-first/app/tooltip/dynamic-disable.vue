<template>
  <tiny-tooltip effect="light" :disabled="disabled" content="点击关闭 tooltip 功能" placement="bottom">
    <tiny-button type="primary" @click="disabled = !disabled">
      点击{{ disabled ? '开启' : '关闭' }} tooltip 功能
    </tiny-button>
  </tiny-tooltip>
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
      disabled: false
    }
  }
}
</script>
