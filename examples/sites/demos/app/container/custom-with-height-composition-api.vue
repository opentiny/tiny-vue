<template>
  <div class="demo-container coBox7">
    <tiny-container
      :pattern="pattern"
      :aside-width="asideWidth"
      :footer-height="footerHeight"
      :header-height="headerHeight"
    >
      <template #header>
        <tiny-layout>header-height：80</tiny-layout>
      </template>
      <template #aside>
        <tiny-layout>aside-width：200</tiny-layout>
      </template>
      <tiny-layout>Main</tiny-layout>
      <template #footer>
        <tiny-layout>footer-height：80</tiny-layout>
      </template>
    </tiny-container>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Container as TinyContainer, Layout as TinyLayout } from '@opentiny/vue'

const pattern = ref('legend')
const asideWidth = ref(200)
const footerHeight = ref(80)
const headerHeight = ref(80)
</script>
