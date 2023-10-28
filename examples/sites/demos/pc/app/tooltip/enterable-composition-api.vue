<template>
  <tiny-tooltip content="鼠标不能进入到 tooltip 中" :enterable="false" placement="bottom">
    <button class="tiny-button tiny-button--primary">鼠标不能进入到 tooltip 中</button>
  </tiny-tooltip>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Tooltip as TinyTooltip } from '@opentiny/vue'

const disabled = ref(false)
</script>
