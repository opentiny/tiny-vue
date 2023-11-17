<template>
  <div class="demo-container coBox7">
    <tiny-container
      :pattern="pattern"
      :aside-width="asideWidth"
      :footer-height="footerHeight"
      :header-height="headerHeight"
    >
      <template #header>
        <tiny-layout>header-height：80px</tiny-layout>
      </template>
      <template #aside>
        <tiny-layout>aside-width：200px</tiny-layout>
      </template>
      <tiny-layout>Main 自动填充空间</tiny-layout>
      <template #footer>
        <tiny-layout>footer-height：80px</tiny-layout>
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

<style>
.demo-container .tiny-container {
  height: 300px;
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
  background-color: #fff0f0;
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

.demo-container .tiny-container .main .changePattern .tiny-radio {
  color: #a3a355;
  font-size: 16px;
  margin: 0 7px;
}
</style>
