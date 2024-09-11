<template>
  <div>
    <tiny-button @click="onClick">生成新数据</tiny-button>
    <tiny-virtual-tree
      ref="vTree"
      width="600"
      height="400"
      row-height="36"
      scrollbar-size="6"
      :tree-op="treeOp"
    ></tiny-virtual-tree>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { VirtualTree as TinyVirtualTree, Button as TinyButton, Modal } from '@opentiny/vue'

const defaultProps = { children: 'children', label: 'label' }
const data5 = ref([])
const defaultExpandedKeys = ref([])

const genTreeData = (total, level) => {
  const treeData = []

  let id = 0

  const genItem = (total, level, array) => {
    for (let i = 0; i < total; i++) {
      array.push({ label: `item-${++id}` })
    }

    level--

    if (level > 0) {
      const temp = []

      array[0].children = temp
      array = temp

      genItem(total, level, array)
    }
  }

  genItem(total, level, treeData)

  return treeData
}

const onClick = () => {
  // 生成 12000 条数据
  data5.value = genTreeData(600, 20)
}

const handleNodeClick = (data) => {
  Modal.message({ message: `${data.label}`, status: 'info' })
}

const treeOp = computed(() => ({
  nodeKey: 'label',
  data: data5.value,
  props: defaultProps,
  defaultExpandedKeys: defaultExpandedKeys.value,
  events: {
    nodeClick: handleNodeClick
  }
}))

// 生成 10000 条数据
data5.value = genTreeData(500, 20)
defaultExpandedKeys.value = ['item-1', 'item-501']
</script>
