<template>
  <div class="tiny-steps-demo-space">
    <p>设置节点宽度为 200 像素：</p>
    <br />
    <tiny-steps space="200" :data="stepsData" :active="active" @click="onClick"></tiny-steps>
    <br /><br />
    <p>宽度自适应：</p>
    <br />
    <tiny-steps advanced flex :data="stepsData" :active="active" @click="onClick"></tiny-steps>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinySteps } from '@opentiny/vue'

const stepsData = ref([
  {
    name: 'name 属性内容 1',
    count: 0,
    status: 'done'
  },
  {
    name: 'name 属性内容 2',
    count: 9,
    status: 'doing'
  },
  {
    name: 'name 属性内容 3',
    count: 0,
    status: 'undo'
  }
])
const active = ref(1)

const onClick = (index, node) => {
  active.value = index
  node.status = 'doing'
}
</script>

<style scoped>
.tiny-steps-demo-space p {
  margin: 16px 0;
}
</style>
