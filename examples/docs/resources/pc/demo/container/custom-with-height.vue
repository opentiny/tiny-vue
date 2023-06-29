<template>
  <div class="demo-container coBox7">
    <tiny-container :pattern="pattern" :aside-width="asideWidth" :footer-height="footerHeight" :header-height="headerHeight">
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

<script lang="jsx">
import { Container, Layout } from '@opentiny/vue'

export default {
  components: {
    TinyContainer: Container,
    TinyLayout: Layout
  },
  data() {
    return {
      pattern: 'legend',
      asideWidth: 200,
      footerHeight: 80,
      headerHeight: 80
    }
  }
}
</script>
