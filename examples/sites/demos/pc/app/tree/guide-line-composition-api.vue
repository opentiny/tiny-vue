<template>
  <tiny-tree :data="data" :show-line="showLine" default-expand-all @node-click="handleNodeClick"></tiny-tree>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tree as TinyTree, Modal } from '@opentiny/vue'

const defaultProps = ref({
  children: 'children',
  label: 'label'
})
const data = ref([
  {
    label: '一级 1',
    children: [
      {
        label: '二级 1-1',
        children: [
          {
            label: '三级 1-1-1'
          },
          {
            label: '三级 1-1-2'
          }
        ]
      },
      {
        label: '二级 1-2',
        children: [
          {
            label: '三级 1-2-1'
          },
          {
            label: '三级 1-2-2'
          }
        ]
      }
    ]
  },
  {
    label: '一级 2',
    children: [
      {
        label: '二级 2-1',
        children: [
          {
            label: '三级 2-1-1'
          }
        ]
      },
      {
        label: '二级 2-2',
        children: [
          {
            label: '三级 2-2-1'
          }
        ]
      }
    ]
  },
  {
    label: '一级 3',
    children: [
      {
        label: '二级 3-1',
        children: [
          {
            label: '三级 3-1-1'
          }
        ]
      },
      {
        label: '二级 3-2',
        children: [
          {
            label: '三级 3-2-1'
          }
        ]
      }
    ]
  }
])
const showLine = ref(true)

const handleNodeClick = (data) => {
  Modal.message({ message: `${data.label}`, status: 'info' })
}
</script>
