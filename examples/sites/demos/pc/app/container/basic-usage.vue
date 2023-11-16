<template>
  <div class="demo-container coBox7">
    <tiny-button-group :data="patternData" v-model="myPattern"></tiny-button-group>
    <tiny-container :pattern="myPattern">
      <tiny-layout> Main </tiny-layout>
      <template #header>
        <tiny-layout>Header</tiny-layout>
      </template>
      <template #aside>
        <tiny-layout>Aside</tiny-layout>
      </template>
      <template #footer>
        <tiny-layout>Footer</tiny-layout>
      </template>
    </tiny-container>
  </div>
</template>

<script lang="jsx">
import { Container, Layout, ButtonGroup } from '@opentiny/vue'

export default {
  components: {
    TinyContainer: Container,
    TinyLayout: Layout,
    TinyButtonGroup: ButtonGroup
  },
  data() {
    return {
      myPattern: 'default',
      patternData: [
        { text: '默认:default', value: 'default' },
        { text: '经典:classic', value: 'classic' },
        { text: '简约:simple', value: 'simple' },
        { text: '时尚:fashion', value: 'fashion' },
        { text: '传奇:legend', value: 'legend' }
      ]
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
  margin-top: 24px;
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
</style>
