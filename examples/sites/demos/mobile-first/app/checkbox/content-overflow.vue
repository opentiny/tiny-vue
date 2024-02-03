<template>
  <tiny-tooltip
    ref="tooltip"
    effect="light"
    :content="label"
    :manual="true"
    placement="top-start"
    v-model="showContent"
  >
    <tiny-checkbox v-model="checked" border>
      <div
        ref="label"
        class="w-20 overflow-hidden text-ellipsis whitespace-nowrap align-middle"
        @mouseenter="mouseEnter"
        @mouseleave="mouseLeave"
      >
        {{ label }}
      </div>
    </tiny-checkbox>
  </tiny-tooltip>
</template>

<script>
import { Checkbox, Tooltip } from '@opentiny/vue'

export default {
  components: {
    TinyCheckbox: Checkbox,
    TinyTooltip: Tooltip
  },
  data() {
    return {
      checked: false,
      label: '备选项1 提示文字 提示文字',
      showContent: false
    }
  },
  methods: {
    mouseLeave() {
      this.showContent = false
    },
    mouseEnter() {
      if (this.$refs.label.scrollWidth > this.$refs.label.offsetWidth) {
        this.showContent = true
      }
    }
  }
}
</script>
