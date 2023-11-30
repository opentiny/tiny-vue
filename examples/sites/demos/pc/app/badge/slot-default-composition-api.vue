<template>
  <tiny-badge :value="2">
    <template #default>
      <span class="warning">自定义默认插槽</span>
    </template>
  </tiny-badge>
</template>

<script setup>
import { Badge as TinyBadge } from '@opentiny/vue'
</script>

<style scoped>
.warning {
  color: #fa9841;
}
</style>
