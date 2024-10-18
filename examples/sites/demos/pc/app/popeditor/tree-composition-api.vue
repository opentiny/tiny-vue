<template>
  <tiny-popeditor v-model="value" popseletor="tree" title="树模式" :tree-op="treeOp"></tiny-popeditor>
</template>

<script setup>
import { ref } from 'vue'
import { Popeditor as TinyPopeditor } from '@opentiny/vue'

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
        children: [
          { id: 51, pId: 5, label: 'node1.5.1' },
          { id: 52, pId: 5, label: 'node1.5.2' },
          { id: 53, pId: 5, label: 'node1.5.3' }
        ]
      },
      {
        id: 6,
        label: 'node1.6',
        children: [
          { id: 61, pId: 6, label: 'node1.6.1' },
          { id: 62, pId: 6, label: 'node1.6.2' },
          { id: 63, pId: 6, label: 'node1.6.3' }
        ]
      }
    ]
  }
]
const value = ref('')
const treeOp = ref({
  data: dataset,
  checkOnClickNode: true,
  showLine: true,
  highlightQuery: true
})
</script>
