<template>
  <tiny-tree-menu :data="[]" lazy :load="loadNode"></tiny-tree-menu>
</template>

<script setup>
import { ref } from 'vue'
import { TreeMenu as TinyTreeMenu } from '@opentiny/vue'

const count = ref(1)

function loadNode(node, resolve) {
  if (node.level === 0) {
    return resolve([{ label: '表单组件' }, { label: '数据组件' }])
  }

  if (node.level > 3) return resolve([])

  let hasChild

  if (node.data.label === '指南') {
    hasChild = true
  } else if (node.data.label === '组件') {
    hasChild = false
  } else {
    hasChild = Math.random() > 0.5
  }

  setTimeout(() => {
    let data

    if (hasChild) {
      data = [
        {
          label: '表单组件' + count.value++
        },
        {
          label: '数据组件' + count.value++
        }
      ]
    } else {
      data = []
    }

    resolve(data)
  }, 500)
}
</script>
