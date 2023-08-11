<template>
  <tiny-tooltip content="popper-options配置" :popper-options="options">
    <button class="tiny-button tiny-button--primary">popper-options配置</button>
  </tiny-tooltip>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Tooltip as TinyTooltip } from '@opentiny/vue'

const options = ref({
  gpuAcceleration: true, // 当这一属性被设置为 true 时，popper 的位置将通过 CSS3 的 translate3d 来改变
  removeOnDestroy: false // 当你想要在调用 `destroy` 方法时不自动移除 popper 时，应当将此项设置为 false
})
</script>
