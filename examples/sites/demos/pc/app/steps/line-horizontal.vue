<template>
  <tiny-steps line :data="data" :active="advancedActive" @click="advancedClick"></tiny-steps>
</template>

<script>
import { Steps, Modal } from '@opentiny/vue'

export default {
  components: {
    TinySteps: Steps
  },
  data() {
    return {
      advancedActive: 1,
      data: [
        {
          name: 'Basic Info',
          status: 'done',
          description: 'done 已完成'
        },
        { name: 'BOQ Info', status: 'doing', description: 'doing 处理中' },
        { name: '进行中 BOQ Info', status: 'disabled', description: 'disabled 禁用' },
        { name: 'BBQ Info', status: 'error', description: 'error 错误' },
        { name: 'BBQ Info', description: '默认无状态' }
      ]
    }
  },
  methods: {
    advancedClick(index, node) {
      this.advancedActive = index

      Modal.message({ message: `节点index: ${index}; 节点信息: ${JSON.stringify(node)}.`, status: 'info' })
    }
  }
}
</script>
