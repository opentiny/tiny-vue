<template>
  <tiny-tooltip :tabindex="1" content="Tooltip 组件的 tabindex 为1">
    <button>Tooltip 组件的 tabindex 为1</button>
  </tiny-tooltip>
</template>

<script setup lang="jsx">
import { Tooltip as TinyTooltip } from '@opentiny/vue'
</script>
