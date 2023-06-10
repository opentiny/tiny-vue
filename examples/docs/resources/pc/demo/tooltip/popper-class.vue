<template>
  <tiny-tooltip
    v-model="showTooltip"
    popper-class="tippoper"
    :append-to-body="false"
    content="popper 添加类名"
    :manual="false"
  >
    <button class="tiny-button tiny-button--primary">添加类名</button>
  </tiny-tooltip>
</template>

<script lang="jsx">
import { Tooltip } from '@opentiny/vue'

export default {
  components: {
    TinyTooltip: Tooltip
  },
  data() {
    return {
      showTooltip: true
    }
  }
}
</script>
