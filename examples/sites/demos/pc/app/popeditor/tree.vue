<template>
  <tiny-popeditor v-model="value" popseletor="tree" title="树模式" :tree-op="treeOp"></tiny-popeditor>
</template>

<script>
import { Popeditor } from '@opentiny/vue'

export default {
  components: {
    TinyPopeditor: Popeditor
  },
  data() {
    const dataset = [
      {
        id: 100,
        label: 'node1',
        children: [
          {
            id: 1,
            label: 'node1.1'
          },
          {
            id: 2,
            label: 'node1.2'
          },
          {
            id: 3,
            label: '超长文本超长文本超长文本超文本'
          },
          {
            id: 4,
            label: 'node1.4',
            children: [
              {
                id: 41,
                label: 'node1.4.1',
                children: [{ id: 411, pId: 41, label: 'node1.4.1.1' }]
              },
              {
                id: 42,
                label: 'node1.4.2',
                children: [{ id: 421, pId: 42, label: 'node1.4.2.1' }]
              }
            ]
          },
          {
            id: 5,
            label: 'node1.5',
            children: [{ id: 51, pId: 5, label: 'node1.5.1' }]
          }
        ]
      }
    ]
    return {
      value: '',
      treeOp: {
        data: dataset,
        checkOnClickNode: true
      }
    }
  }
}
</script>
