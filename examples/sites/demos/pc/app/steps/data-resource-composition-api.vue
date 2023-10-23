<template>
  <div class="content">
    <tiny-steps :data="stepsData" :active="active" @click="onClick"></tiny-steps>
  </div>
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
  },
  {
    name: 'name属性内容4',
    count: 5,
    status: 'undo'
  }
])
const active = ref(1)

function onClick(index, node) {
  active.value = index
  node.status = 'doing'
}
</script>

<style scoped>
.content {
  padding: 20px;
  max-width: 50%;
  min-width: 700px;
}
</style>
