<template>
  <div class="demo-steps-click">
    <tiny-steps :data="stepsData" :active="defaultActive" @click="normalClick"></tiny-steps>
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

const normalClick = (index, node) => {
  defaultActive.value = index

  Modal.message({ message: `节点 index：${index}；节点信息： ${JSON.stringify(node)}`, status: 'info' })
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
