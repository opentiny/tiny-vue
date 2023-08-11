<template>
  <tiny-tooltip content="不显示 Tooltip 箭头" :visible-arrow="false">
    <button class="tiny-button tiny-button--primary">不显示 Tooltip 箭头</button>
  </tiny-tooltip>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Tooltip as TinyTooltip } from '@opentiny/vue'

const disabled = ref(false)
</script>
