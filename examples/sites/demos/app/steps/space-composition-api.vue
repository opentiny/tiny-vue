<template>
  <tiny-steps space="200" :data="stepsData" :active="active" @click="onClick"></tiny-steps>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Steps as TinySteps } from '@opentiny/vue'

const stepsData = ref([
  {
    name: 'name属性内容1',
    count: 0,
    status: 'done'
  },
  {
    name: 'name属性内容2',
    count: 9,
    status: 'doing'
  },
  {
    name: 'name属性内容3',
    count: 0,
    status: 'undo'
  }
])
const active = ref(1)

function onClick(index, node) {
  active.value = index
  node.status = 'doing'
}
</script>
