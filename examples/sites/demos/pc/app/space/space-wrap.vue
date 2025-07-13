<template>
  <tiny-space :size="12" :wrap="false">
    <tiny-button v-for="n in 13" :key="n">按钮 {{ n }}</tiny-button>
  </tiny-space>
</template>

<script setup>
import { TinyButton, TinySpace } from '@opentiny/vue'
</script>
