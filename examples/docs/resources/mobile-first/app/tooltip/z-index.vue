<template>
  <div class="h-[12.5rem] relative z-[100]">
    <tiny-button @click="showTip">
      {{ `点击${showTooltip ? '关闭' : '打开'}Tooltip` }}
    </tiny-button>
    <div class="relative top-20 left-[17.5rem]">
      <tiny-tooltip
        :manual="true"
        v-model="showTooltip"
        content="Tooltip组件属性zIndex值为relative，弹出层样式属性zIndex值参考Reference及其父级Dom"
        placement="top"
        z-index="relative"
      >
        <tiny-button type="primary"> Reference </tiny-button>
      </tiny-tooltip>
      <tiny-tooltip
        :manual="true"
        v-model="showTooltip"
        content="Tooltip组件属性zIndex为默认值next，弹出层样式属性zIndex值由组件库内部维护"
        placement="bottom"
      >
        <tiny-button type="primary"> Reference </tiny-button>
      </tiny-tooltip>
    </div>
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
