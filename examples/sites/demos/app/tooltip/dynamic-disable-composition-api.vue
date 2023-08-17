<template>
  <tiny-tooltip effect="light" :disabled="disabled" content="点击关闭 tooltip 功能" placement="bottom">
    <button class="tiny-button tiny-button--primary" @click="disabled = !disabled">
      点击{{ disabled ? '开启' : '关闭' }} tooltip 功能
    </button>
  </tiny-tooltip>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Tooltip as TinyTooltip } from '@opentiny/vue'

const disabled = ref(false)
</script>
