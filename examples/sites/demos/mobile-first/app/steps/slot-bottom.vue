<template>
  <tiny-steps advanced :data="data" :active="advancedActive" @click="advancedClick">
    <template #block-bottom="{ node, index }">
      <div class="block-bottom" :data-key="index">
        <div>{{ node.date.split(' ')[0] }}</div>
        <div>{{ node.date.split(' ')[1] }}</div>
        <div class="multi-line">
          {{ node.description }}
        </div>
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
          date: '2022-02-02 12:00:00',
          description:
            'Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional '
        },
        { name: '已完成 BOQ Info', status: 'done', date: '2022-02-02 12:00:00', description: 'done 已完成' },
        { name: '错误 BBQ Info', status: 'error', date: '2022-02-02 12:00:00', description: 'error 错误' },
        {
          name: '已禁用 Involved Parties Involved Parties Involved Parties',
          status: 'disabled',
          date: '2022-02-02 12:00:00',
          description:
            'disabled 已禁用，描述内容描述内容，超出部分隐藏，描述内容，超出部分隐藏，描述内容，超出部分隐藏，描述内容，超出部分隐藏'
        },
        { name: '默认 Billing1', status: '', date: '2022-02-02 12:00:00', description: '默认无状态' },
        { name: '默认 Billing2', status: '', date: '2022-02-02 12:00:00', description: '默认无状态' },
        { name: '默认 Billing3', status: '', date: '2022-02-02 12:00:00', description: '默认无状态' },
        { name: '默认 Billing4', status: '', date: '2022-02-02 12:00:00', description: '默认无状态' },
        { name: '默认 Billing5', status: '', date: '2022-02-02 12:00:00', description: '默认无状态' }
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

<style scoped>
/* 文本超出两行显示...，IE下不支持 */
.multi-line {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.block-bottom {
  color: #999;
  margin-top: 8px;
  text-align: center;
}
</style>
