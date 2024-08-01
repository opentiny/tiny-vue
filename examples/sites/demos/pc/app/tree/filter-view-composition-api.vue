<template>
  <div>
    <div class="option-row">
      <span> 视图：</span>
      <tiny-radio-group v-model="viewType">
        <tiny-radio label="tree">树视图 tree</tiny-radio>
        <tiny-radio label="plain">平铺视图 plain</tiny-radio>
      </tiny-radio-group>
    </div>
    <div class="option-row">
      <span> 平铺视图中是否显示辅助信息：</span>
      <tiny-radio-group v-model="showAuxi">
        <tiny-radio label="show"> 显示 </tiny-radio>
        <tiny-radio label="hide"> 隐藏 </tiny-radio>
      </tiny-radio-group>
    </div>
    <div class="option-row">
      <span> 搜索后是否高亮关键字：</span>
      <tiny-radio-group v-model="highlightQuery">
        <tiny-radio label="show"> 高亮 </tiny-radio>
        <tiny-radio label="hide"> 默认不变 </tiny-radio>
      </tiny-radio-group>
    </div>
    <div class="option-row">
      <span> 搜索值：</span>
      <tiny-input v-model="filterText" @input="inputChange"></tiny-input>
    </div>

    <tiny-tree
      ref="treeRef"
      :data="data"
      :view-type="viewType"
      :highlight-query="highlightQuery === 'show'"
      :filter-node-method="filterNodeMethod"
      :show-auxi="showAuxi === 'show'"
      default-expand-all
      show-checkbox
      node-key="id"
    >
      <!-- 屏蔽默认的后缀图标 -->
      <template #suffix> <div></div> </template>
    </tiny-tree>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Tree as TinyTree, RadioGroup as TinyRadioGroup, Radio as TinyRadio, Input as TinyInput } from '@opentiny/vue'

const treeRef = ref()
const viewType = ref('tree')
const highlightQuery = ref('hide')
const showAuxi = ref('hide')
const filterText = ref('')
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

function inputChange() {
  treeRef.value.filter(filterText.value)
}

// eslint-disable-next-line unused-imports/no-unused-vars
function filterNodeMethod(text, data, node) {
  return data.label.includes(text)
}
</script>

<style scoped>
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
