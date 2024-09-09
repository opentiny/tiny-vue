<template>
  <div>
    <p>使用字符串：</p>
    <br />
    <tiny-badge :value="2" :offset="['0', '-20%']">我的待办</tiny-badge>
    <br /><br />
    <p>使用数字：</p>
    <br />
    <tiny-badge :value="2" :offset="[0, -6]">我的待办</tiny-badge>
  </div>
</template>

<script setup>
import { Badge as TinyBadge } from '@opentiny/vue'
</script>
