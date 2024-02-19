<template>
  <tiny-steps advanced :data="data" :active="advancedActive" @click="advancedClick">
    <template #prefix="{ slotScope: { node, index } }">
      <div style="border: 1px solid currentColor; border-radius: 4px; padding: 0 2px; margin-right: 4px">
        {{ index > 1 ? 'SS' + (index + 1) : '插槽 ' + node.status }}
      </div>
    </template>
  </tiny-steps>
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
        {
          name: '默认 Basic Info',
          status: '',
          description:
            'Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional '
        },
        { name: '已完成 BOQ Info', status: 'done', description: 'done 已完成' },
        { name: '错误 BBQ Info', status: 'error', description: 'error 错误' },
        {
          name: '已禁用 Involved Parties Involved Parties Involved Parties',
          status: 'disabled',
          description:
            'disabled 已禁用，描述内容描述内容，超出部分隐藏，描述内容，超出部分隐藏，描述内容，超出部分隐藏，描述内容，超出部分隐藏'
        },
        { name: '默认 Billing1', status: '', description: '默认无状态' },
        { name: '默认 Billing2', status: '', description: '默认无状态' },
        { name: '默认 Billing3', status: '', description: '默认无状态' },
        { name: '默认 Billing4', status: '', description: '默认无状态' },
        { name: '默认 Billing5', status: '', description: '默认无状态' }
      ],
      referenceElm: null,
      node: {}
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
