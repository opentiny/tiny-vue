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

<style>
.demo-container .tiny-container {
  height: 200px;
  color: #5f6774;
  text-align: center;
  font-size: 18px;
  position: relative;
}

.demo-container .tiny-container .tiny-container__header {
  background-color: #ecf8ff;
  border: 3px solid #ffffff;
  color: #5b90af;
}

.demo-container .tiny-container .tiny-container__aside {
  background-color: #ffecec;
  border: 3px solid #ffffff;
  color: #d27070;
}

.demo-container .tiny-container .tiny-container__main {
  background-color: #fffdec;
  border: 3px solid #ffffff;
  color: #b1a859;
}

.demo-container .tiny-container .tiny-container__footer {
  background-color: #e8ffed;
  border: 3px solid #ffffff;
  color: #84a18a;
}
</style>
