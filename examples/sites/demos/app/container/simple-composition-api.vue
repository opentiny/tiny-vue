<template>
  <div class="demo-container coBox2">
    <tiny-container pattern="simple">
      <template #aside>
        <tiny-layout>Aside</tiny-layout>
      </template>
      <tiny-layout>Main</tiny-layout>
    </tiny-container>
  </div>
</template>

<script setup lang="jsx">
import { Container as TinyContainer, Layout as TinyLayout } from '@opentiny/vue'
</script>
