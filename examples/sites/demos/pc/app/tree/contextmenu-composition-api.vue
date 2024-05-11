<!-- eslint-disable vue/no-template-shadow -->
<template>
  <div>
    <tiny-tree
      ref="treeRef"
      :data="data"
      default-expand-all
      :show-contextmenu="true"
      @node-contextmenu="nodeContextmenu"
    >
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

const data = ref([
  {
    id: '1',
    label: '数据 1',
    children: [
      { id: '1-1', label: '数据 1-1', children: [{ id: '1-1-1', label: '数据 1-1-1' }] },
      { id: '1-2', label: '数据 1-2' }
    ]
  },
  {
    id: '2',
    label: '数据 2',
    children: [
      { id: '2-1', label: '数据 2-1' },
      { id: '2-2', label: '数据 2-2' }
    ]
  },
  {
    id: '3',
    label: '数据 3',
    children: [{ id: '3-1', label: '数据 3-1' }]
  }
])
const treeRef = ref()

function add(data) {
  console.log('点击了添加子节点', data)
  treeRef.value.closeMenu()
}

function update(data) {
  console.log('点击了更新', data)
  treeRef.value.closeMenu()
}

function remove(data, node) {
  console.log('点击了删除', { data, node })
  treeRef.value.closeMenu()
}
function nodeContextmenu(event, data, node, vm) {
  console.log('触发了右键事件：', { event, data, node, vm })
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
