<template>
  <tiny-tree :data="data" :expand-on-click-node="false">
    <template #default="sourceData">
      <div class="custom-label">{{ sourceData.data.label }}</div>
    </template>

    <!-- 前缀插槽 -->
    <template #prefix="{ node }">
      <div class="prefix-slot" @click="click(node.label, '前缀插槽')">[前缀插槽]</div>
    </template>
    <!-- 后缀插槽 -->
    <template #suffix="{ node }">
      <div class="subfix-slot" @click="click(node.label, '后缀插槽')">[后缀插槽]</div>
    </template>
  </tiny-tree>
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

function click(msg, slotName) {
  Modal.message(`[${slotName}] 节点名称：${msg}`)
}
</script>

<style scoped>
.custom-label {
  color: #333;
}

:deep(.is-current > .tiny-tree-node__content) svg {
  fill: #5e7ce0;
}

:deep(.is-current > .tiny-tree-node__content) .custom-label {
  color: #5e7ce0;
  font-weight: 500;
}

.prefix-slot {
  margin-left: 8px;
}

.subfix-slot {
  margin-left: 8px;
}
</style>
