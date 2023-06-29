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

<script lang="jsx">
import { Container, Layout } from '@opentiny/vue'

export default {
  components: {
    TinyContainer: Container,
    TinyLayout: Layout
  }
}
</script>

