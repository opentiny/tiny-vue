<template>
  <div>
    <tiny-tree :data="data" :props="defaultProps" default-expand-all :show-contextmenu="true" ref="treeRef">
      <template #contextmenu="{ data, node }">
        <ul class="context-menu">
          <li @click="add(data)">新增子节点</li>
          <li @click="update(data)">更新</li>
          <li @click="remove(data, node)">删除</li>
        </ul>
      </template>
    </tiny-tree>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Tree as TinyTree } from '@opentiny/vue'

let newId = 1000

const defaultProps = ref({
  children: 'children',
  label: 'label'
})
const data = ref([
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
        label: '二级 2-1',
        children: [
          {
            id: 10,
            label: '三级 2-1-1'
          }
        ]
      },
      {
        id: 6,
        label: '二级 2-2',
        children: [
          {
            id: 11,
            label: '三级 2-2-1'
          }
        ]
      }
    ]
  },
  {
    id: 3,
    label: '一级 3',
    children: [
      {
        id: 7,
        label: '二级 3-1',
        children: [
          {
            id: 12,
            label: '三级 3-1-1'
          }
        ]
      },
      {
        id: 8,
        label: '二级 3-2',
        children: [
          {
            id: 13,
            label: '三级 3-2-1'
          }
        ]
      }
    ]
  }
])
const treeRef = ref()

function add(data) {
  const newChild = { id: newId++, label: `new child ${newId - 1000}`, children: [] }
  if (!data.children) {
    data.children = []
  }

  data.children.push(newChild)
  data.value = [...data.value]

  treeRef.value.closeMenu()
}

function update(data) {
  data.label += ' update'
  data.value = [...data.value]
  treeRef.value.closeMenu()
}

function remove(data, node) {
  const parent = node.parent
  const currentNodes = parent.data.children || parent.data
  const index = currentNodes.findIndex((i) => i.id === data.id)
  currentNodes.splice(index, 1)

  data.value = [...data.value]
  treeRef.value.closeMenu()
}
</script>

<style scoped>
.context-menu {
  background-color: #fff;
}

.context-menu li {
  width: 120px;
  padding: 8px 10px;
  border-bottom: 1px solid #ccc;
  font-size: 12px;
}

.context-menu li:hover {
  background: #eee;
}
</style>
