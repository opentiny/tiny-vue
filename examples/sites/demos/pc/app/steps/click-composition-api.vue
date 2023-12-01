<template>
  <div class="demo-steps-click">
    <div>点击步骤条节点来切换选中状态</div>
    <tiny-steps :data="stepsData" :active="defaultActive" @click="normalClick"></tiny-steps>
    <div v-if="currentNode">
      <span>选中节点 index: {{ currentNode.index }} </span><br />
      <span>选中节点 node: {{ currentNode.node }} </span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Steps as TinySteps } from '@opentiny/vue'

const stepsData = ref([
  {
    name: 'Basic Info',
    count: 3,
    status: 'done'
  },
  {
    name: 'BOQ Info',
    count: 0,
    status: 'done'
  },
  {
    name: 'Involved Parties',
    count: 10,
    status: 'doing'
  },
  {
    name: 'Billing',
    count: 0,
    status: 'done'
  }
])
const defaultActive = ref(1)
const currentNode = ref(null)

const normalClick = (index, node) => {
  defaultActive.value = index
  currentNode.value = {
    index,
    node: JSON.stringify(node)
  }
}
</script>

<style scoped>
.demo-steps-click {
  padding: 20px;
  max-width: 50%;
  min-width: 700px;
  font-size: 14px;
}

.demo-steps-click > div:not(:last-child) {
  margin: 0 0 20px 0;
}

span {
  line-height: 1.5;
}
</style>
