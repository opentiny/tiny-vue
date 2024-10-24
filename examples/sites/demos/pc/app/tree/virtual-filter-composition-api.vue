<template>
  <div>
    <div class="option-row">
      <span> 搜索值：</span>
      <tiny-input v-model="filterText" @input="inputChange"></tiny-input>
    </div>

    <tiny-tree
      ref="treeRef"
      :data="data"
      :node-height="50"
      :tree-height="400"
      :filter-node-method="filterNodeMethod"
      show-checkbox
      node-key="id"
    >
      <!-- 屏蔽默认的后缀图标 -->
      <template #suffix>
        <div></div>
      </template>
    </tiny-tree>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Tree as TinyTree, Input as TinyInput } from '@opentiny/vue'

const treeRef = ref()
const filterText = ref('')
function inputChange() {
  treeRef.value.filter(filterText.value)
}
// eslint-disable-next-line unused-imports/no-unused-vars
function filterNodeMethod(text, data, node) {
  return data.label.includes(text)
}
const generateTreeData = (num) => {
  const data = []
  for (let i = 0; i < num; i++) {
    const children = []
    for (let j = 0; j < Math.floor(Math.random() * 3) + 1; j++) {
      children.push({
        label: `数据 ${i}-${j}`,
        children: [], // 子节点可以继续递归生成,
        id: `${i}-${j}`
      })
    }
    data.push({
      label: `数据 ${i}`,
      children,
      id: `${i}`
    })
  }
  return data
}
const data = generateTreeData(100)
</script>

<style>
.option-row {
  display: flex;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 16px;
}

.option-row > span {
  font-size: 18px;
}

.tiny-input {
  width: 150px;
}
</style>
