<template>
  <p>mini尺寸:</p>
  <tiny-time-line
    :data="data"
    :active="normalActive"
    type="normal"
    size="mini"
    text-position="right"
    @click="normalClick"
  >
  </tiny-time-line>

  <p>默认尺寸:</p>
  <tiny-time-line :data="data" :active="normalActive" type="normal" text-position="right" @click="normalClick">
  </tiny-time-line>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TimeLine as TinyTimeLine, Modal } from '@opentiny/vue'

const normalActive = ref(0)
const data = ref([
  {
    name: 'Basic Info. sdfsdjgh jiojfoisjlksdfks sdfksdljk sjviosdjvii bin sfdihsdi tin sdfsdsd '
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
