<template>
  <div class="demo-container coBox7">
    <tiny-container :pattern="pattern">
      <template #header>
        <tiny-layout>header</tiny-layout>
      </template>
      <template #aside>
        <tiny-layout>aside</tiny-layout>
      </template>
      <tiny-layout>Main</tiny-layout>
      <template #footer>
        <tiny-layout>footer</tiny-layout>
      </template>
    </tiny-container>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Container as TinyContainer, Layout as TinyLayout } from '@opentiny/vue'

const pattern = ref('classic')
</script>
