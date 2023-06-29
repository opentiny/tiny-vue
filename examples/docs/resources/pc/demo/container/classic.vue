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

<script lang="jsx">
import { Container, Layout } from '@opentiny/vue'

export default {
  components: {
    TinyContainer: Container,
    TinyLayout: Layout
  },
  data() {
    return {
      pattern: 'classic'
    }
  }
}
</script>