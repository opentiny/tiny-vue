<template>
  <div class="demo-container coBox5">
    <tiny-container pattern="legend">
      <template #header>
        <tiny-layout>Header</tiny-layout>
      </template>
      <template #aside>
        <tiny-layout>Aside</tiny-layout>
      </template>
      <tiny-layout>Main</tiny-layout>
      <template #footer>
        <tiny-layout>Footer</tiny-layout>
      </template>
    </tiny-container>
  </div>
</template>

<script setup lang="jsx">
import { Container as TinyContainer, Layout as TinyLayout } from '@opentiny/vue'
</script>
