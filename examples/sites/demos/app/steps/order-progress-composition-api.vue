<template>
  <div class="content">
    <tiny-steps
      :data="stepsData"
      :active="active"
      name-field="reName"
      count-field="reCount"
      status-field="reStatus"
      @click="normalClick"
    ></tiny-steps>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Steps as TinySteps, Modal } from '@opentiny/vue'

const active = ref(1)
const stepsData = ref([
  {
    reName: '已下单',
    reCount: 0,
    reStatus: 'done'
  },
  {
    reName: '运输中',
    reCount: 1,
    reStatus: 'done'
  },
  {
    reName: '已签收',
    reCount: 0,
    reStatus: 'doing'
  }
])

function normalClick(index, node) {
  active.value = index

  Modal.message(`节点index: ${index}; 节点信息: ${JSON.stringify(node)}.`)
}
</script>

<style scoped>
.content {
  padding: 20px;
  max-width: 50%;
  min-width: 700px;
}
</style>
