<template>
  <tiny-tooltip :content="content" content-max-height="200px">
    <button class="tiny-button tiny-button--primary">显示超长文本</button>
  </tiny-tooltip>
</template>

<script setup>
import { Tooltip as TinyTooltip } from '@opentiny/vue'

const content = Array(1000).fill('这是很长很长的文本').join('，')
</script>
