<template>
  <div>
    <tiny-button @click="openEdit">进入编辑</tiny-button>
    <tiny-button @click="closeEdit">取消编辑</tiny-button>
    <tiny-button @click="saveEdit">保存编辑</tiny-button> <br />
    <br />
    <div class="red">数据1 禁止添加; &nbsp;数据2 禁止编辑; &nbsp;数据3 禁止删除;</div>
    <tiny-tree
      ref="treeRef"
      node-key="id"
      :data="data"
      current-node-key="1"
      default-expand-all
      :add-disabled-keys="addDisabledKeys"
      :edit-disabled-keys="editDisabledKeys"
      :delete-disabled-keys="deleteDisabledKeys"
      @open-edit="onOpenEdit"
      @close-edit="onCloseEdit"
      @save-edit="onSaveEdit"
      @add-node="onAddNode"
      @edit-node="onEditNode"
      @delete-node="onDeleteNode"
      :delete-node-method="deleteNodeMethod"
    ></tiny-tree>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Tree as TinyTree, Button as TinyButton, Modal } from '@opentiny/vue'

const data = ref([
  {
    id: '1',
    label: '数据 1',
    children: [{ id: '1-1', label: '数据 1-1', children: [{ id: '1-1-1', label: '数据 1-1-1' }] }]
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
const addDisabledKeys = ref(['1'])
const editDisabledKeys = ref(['2'])
const deleteDisabledKeys = ref(['3'])
const treeRef = ref()

function openEdit() {
  treeRef.value.openEdit()
}
function closeEdit() {
  treeRef.value.closeEdit()
}
function saveEdit() {
  data.value = treeRef.value.saveEdit()
}

function onOpenEdit() {
  console.log('进入编辑事件')
}
function onCloseEdit() {
  console.log('关闭编辑事件')
}
function onSaveEdit(changedData, finalData) {
  console.log('保存编辑事件', changedData, finalData)
}
function onAddNode(addedNode) {
  console.log('添加节点', addedNode)
}
function onEditNode(editNode) {
  console.log('修改节点', editNode)
}
function onDeleteNode(deletedNode) {
  console.log('删除节点', deletedNode)
}
function deleteNodeMethod() {
  // 方式 1：直接返回 Boolean 值
  // return true

  // 方式 2：返回 Promise 异步
  return new Promise((resolve) => {
    Modal.confirm({
      title: 'deleteNodeMethod 钩子函数',
      status: 'info',
      message: '您确定要删除数据吗？',
      events: {
        confirm() {
          resolve(true)
        },
        cancel() {
          resolve(false)
        }
      }
    })
  })
}
</script>

<style scoped>
.red {
  color: red;
}
</style>
