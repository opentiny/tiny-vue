<template>
  <div>
    <tiny-input placeholder="输入关键字进行过滤" v-model="filterText"></tiny-input>
    <tiny-tree
      class="filter-tree"
      :data="data5"
      default-expand-all
      :filter-node-method="filterNode"
      ref="treeRef"
    ></tiny-tree>
  </div>
</template>

<script setup lang="jsx">
import { ref, watch } from 'vue'
import { Tree as TinyTree, Input as TinyInput } from '@opentiny/vue'

const filterText = ref('')
const data5 = ref([
  {
    id: 1,
    label: '一级 1',
    children: [
      {
        id: 4,
        label: '二级 1-1',
        children: [
          {
            id: 9,
            label: '三级 1-1-1'
          },
          {
            id: 10,
            label: '三级 1-1-2'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    label: '一级 2',
    children: [
      {
        id: 5,
        label: '二级 2-1'
      },
      {
        id: 6,
        label: '二级 2-2'
      }
    ]
  },
  {
    id: 3,
    label: '一级 3',
    children: [
      {
        id: 7,
        label: '二级 3-1'
      },
      {
        id: 8,
        label: '二级 3-2'
      }
    ]
  }
])
const treeRef = ref()

watch(filterText, (val) => {
  treeRef.value.filter(val)
})

function filterNode(value, data) {
  if (!value) return true
  return data.label.includes(value)
}
</script>
