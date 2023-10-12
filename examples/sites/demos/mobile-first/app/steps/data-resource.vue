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
      advancedActive: 1,
      data: [
        {
          name: 'Basic Info',
          status: '',
          description:
            'Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional '
        },
        { name: 'BOQ Info', status: 'done', description: 'done 已完成' },
        { name: 'BBQ Info', status: 'error', description: 'error 错误' },
        {
          name: 'Involved Parties Involved Parties Involved Parties',
          status: 'disabled',
          description:
            'disabled 已禁用，描述内容描述内容，超出部分隐藏，描述内容，超出部分隐藏，描述内容，超出部分隐藏，描述内容，超出部分隐藏'
        },
        { name: 'Billing', status: '', description: '默认无状态' }
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
