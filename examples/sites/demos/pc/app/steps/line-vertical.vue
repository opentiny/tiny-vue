<template>
  <tiny-steps line vertical :data="data" :active="active" @click="advancedClick"></tiny-steps>
</template>

<script>
import { Steps, Modal } from '@opentiny/vue'

export default {
  components: {
    TinySteps: Steps
  },
  data() {
    return {
      active: 1,
      data: [
        {
          name: '默认 Basic Info',
          status: '',
          description: '默认无状态'
        },
        { name: '已完成 BOQ Info', status: 'done', description: 'done 已完成' },
        { name: '进行中 BOQ Info', status: 'doing', description: 'doing 进行中' },
        { name: '错误 BBQ Info', status: 'error', description: 'error 错误' },
        {
          name: '已禁用 Involved Parties',
          status: 'disabled',
          description: 'disabled 已禁用'
        }
      ]
    }
  },
  methods: {
    advancedClick(index, node) {
      this.active = index

      Modal.message(`节点index: ${index}; 节点信息: ${JSON.stringify(node)}.`)
    }
  }
}
</script>
