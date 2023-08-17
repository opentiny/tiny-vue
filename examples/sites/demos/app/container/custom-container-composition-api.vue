<template>
  <div class="demo-container coBox7">
    <tiny-container :pattern="myPattern">
      <template #header>
        <tiny-layout>Header</tiny-layout>
      </template>
      <template #aside>
        <tiny-layout>Aside</tiny-layout>
      </template>
      <tiny-layout>
        Main
        <br />
        <div v-for="item in patternData" :key="item.value" class="select-item">
          <input type="radio" :id="item.value" name="pattern" :value="item.value" v-model="myPattern" />
          <label :for="item.value">{{ item.title }}</label>
        </div>
      </tiny-layout>
      <template #footer>
        <tiny-layout>Footer</tiny-layout>
      </template>
    </tiny-container>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Container as TinyContainer, Layout as TinyLayout } from '@opentiny/vue'

const mode = ref('pc')
const myPattern = ref('default')
const patternData = ref([
  {
    title: '默认:default',
    value: 'default'
  },
  {
    title: '经典:classic',
    value: 'classic'
  },
  {
    title: '简约:simple',
    value: 'simple'
  },
  {
    title: '时尚:fashion',
    value: 'fashion'
  },
  {
    title: '传奇:legend',
    value: 'legend'
  }
])
</script>
