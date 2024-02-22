<template>
  <p>使用字符串：</p>
  <tiny-badge :value="2" :offset="['0', '-50%']">我的待办</tiny-badge>
  <p>使用数字：</p>
  <tiny-badge :value="2" :offset="[0, -10]">我的待办</tiny-badge>
</template>

<script setup>
import { Badge as TinyBadge } from '@opentiny/vue'
</script>
