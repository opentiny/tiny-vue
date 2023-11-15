<template>
  <div class="badge-demo">
    <tiny-badge :value="2">默认类型</tiny-badge>
    <tiny-badge :value="2" type="danger">danger 类型</tiny-badge>
    <tiny-badge :value="2" type="primary">primary 类型</tiny-badge>
    <tiny-badge :value="2" type="success">success 类型</tiny-badge>
    <tiny-badge :value="2" type="warning">warning 类型</tiny-badge>
    <tiny-badge :value="2" type="info">info 类型</tiny-badge>
  </div>
</template>

<script setup>
import { Badge as TinyBadge } from '@opentiny/vue'
</script>
<style scoped>
.badge-demo .tiny-badge__wrapper {
  margin-bottom: 12px;
}
</style>
