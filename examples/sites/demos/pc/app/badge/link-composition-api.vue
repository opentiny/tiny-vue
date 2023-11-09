<template>
  <div>
    <tiny-badge :value="2" href="/" target="_self">当前标签打开</tiny-badge>
    <br />
    <tiny-badge :value="2" href="/" target="_blank">新建标签打开</tiny-badge>
  </div>
</template>

<script setup>
import { Badge as TinyBadge } from '@opentiny/vue'
</script>
