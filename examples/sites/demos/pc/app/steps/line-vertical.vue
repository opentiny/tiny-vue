<template>
  <tiny-steps line vertical :data="data" :active="active" @click="advancedClick"></tiny-steps>
</template>

<script>
import { TinySteps, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinySteps
  },
  data() {
    return {
      active: 1,
      data: [
        {
          name: '已完成',
          status: 'done',
          description: '已完成的描述'
        },
        { name: '当前', status: 'doing', description: '当前步骤的描述' },
        { name: '错误/失败', status: 'error', description: '错误或失败步骤的描述' },
        { name: '未进行' },
        {
          name: '禁用',
          status: 'disabled',
          description: '禁用的描述'
        }
      ]
    }
  },
  methods: {
    advancedClick(index, node) {
      this.active = index

      TinyModal.message({ message: `节点 index: ${index}; 节点信息：${JSON.stringify(node)}.`, status: 'info' })
    }
  }
}
</script>
