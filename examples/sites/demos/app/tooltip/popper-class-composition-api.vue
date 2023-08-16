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

<script setup lang="jsx">
import { ref } from 'vue'
import { Tooltip as TinyTooltip } from '@opentiny/vue'

const showTooltip = ref(true)
</script>
