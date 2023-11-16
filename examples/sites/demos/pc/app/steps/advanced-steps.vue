<template>
  <tiny-steps :data="data" :active="advancedActive" @click="advancedClick"></tiny-steps>
</template>

<script>
import { Steps, Modal } from '@opentiny/vue'

export default {
  components: {
    TinySteps: Steps
  },
  data() {
    return {
      advancedActive: 2,
      data: [
        { name: 'Basic Info', count: 3, status: 'doing' },
        { name: 'BOQ Info', count: 0, status: 'done' },
        { name: 'Involved Parties', count: 10, status: 'error' },
        { name: 'Billing', count: 0, status: 'disabled' }
      ]
    }
  },
  methods: {
    advancedClick(index, node) {
      this.advancedActive = index

      Modal.message(`节点index: ${index}; 节点信息: ${JSON.stringify(node)}.`)
    }
  }
}
</script>
