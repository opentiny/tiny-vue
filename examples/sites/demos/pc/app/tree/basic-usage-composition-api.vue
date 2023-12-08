<template>
  <div>
    <div class="option-row">
      <span> 连接线：</span>
      <tiny-radio-group v-model="showLine">
        <tiny-radio label="show">显示</tiny-radio>
        <tiny-radio label="hide">不显示</tiny-radio>
      </tiny-radio-group>
    </div>
    <div class="option-row">
      <span> 组件大小：</span>
      <tiny-radio-group v-model="size">
        <tiny-radio label="small">迷你尺寸</tiny-radio>
        <tiny-radio label="medium">正常尺寸</tiny-radio>
      </tiny-radio-group>
    </div>
    <div class="option-row">
      <span> 层级水平缩进：</span>
      <tiny-radio-group v-model="indent">
        <tiny-radio :label="18">18px</tiny-radio>
        <tiny-radio :label="28">28px</tiny-radio>
        <tiny-radio :label="38">38px</tiny-radio>
      </tiny-radio-group>
    </div>

    <tiny-tree
      :data="data"
      :size="size"
      :indent="indent"
      :show-line="showLine === 'show'"
      default-expand-all
      @node-click="nodeClick"
    ></tiny-tree>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Tree as TinyTree, RadioGroup as TinyRadioGroup, Radio as TinyRadio } from '@opentiny/vue'

const showLine = ref('hide')
const size = ref('medium')
const indent = ref(18)
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
function nodeClick(data, node, vm) {
  console.log('点击节点事件：', { data, node, vm })
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
</style>
