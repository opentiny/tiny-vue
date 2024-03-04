<template>
  <tiny-badge :value="2">
    自定义内容插槽
    <template #content>自定义</template>
  </tiny-badge>
</template>

<script setup>
import { Badge as TinyBadge } from '@opentiny/vue'
</script>

<style scoped>
.tiny-badge {
  border-radius: 22px;
}
</style>
