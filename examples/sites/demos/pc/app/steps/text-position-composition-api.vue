<template>
  <p>默认内容位于序号下方</p>
  <tiny-time-line :data="data" :active="normalActive" type="normal" @click="normalClick"> </tiny-time-line>

  <p>设置<code>textPosition</code>为<code>right</code>时， 内容位于序号右边。</p>
  <tiny-time-line :data="data" :active="normalActive1" type="normal" text-position="right" @click="normalClick1">
  </tiny-time-line>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TimeLine as TinyTimeLine, Modal } from '@opentiny/vue'

const normalActive = ref(0)
const data = ref([
  {
    name: 'Basic Info.'
  },
  {
    name: 'AAAAA'
  },
  {
    name: 'Involved Parties',
    error: true
  },
  {
    name: 'Billing',
    disabled: true
  }
])
const normalActive1 = ref(0)

function normalClick(index, node) {
  normalActive.value = index

  Modal.message(`节点index: ${index}; 节点信息: ${JSON.stringify(node)}.`)
}

function normalClick1(index, node) {
  normalActive1.value = index

  Modal.message(`节点index: ${index}; 节点信息: ${JSON.stringify(node)}.`)
}
</script>

<style>
code {
  padding: 4px;
  background-color: var(--lightless);
}
</style>
