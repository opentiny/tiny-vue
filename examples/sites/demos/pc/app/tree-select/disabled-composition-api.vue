<template>
  <div>
    <p>场景1： 未选择</p>
    <tiny-tree-select v-model="value1" :tree-op="treeOp" disabled></tiny-tree-select>
    <p>场景2： 单选</p>
    <tiny-tree-select v-model="value2" :tree-op="treeOp" disabled></tiny-tree-select>
    <p>场景3： 多选</p>
    <tiny-tree-select v-model="value3" :tree-op="treeOp" multiple disabled></tiny-tree-select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TreeSelect as TinyTreeSelect } from '@opentiny/vue'

const value1 = ref('')
const value2 = ref(1)
const value3 = ref([1, 4, 9, 10])

const treeOp = ref({
  data: [
    {
      value: 1,
      label: '一级 1',
      children: [
        {
          value: 4,
          label: '二级 1-1',
          children: [
            {
              value: 9,
              label: '三级 1-1-1'
            },
            {
              value: 10,
              label: '三级 1-1-2'
            }
          ]
        }
      ]
    },
    {
      value: 2,
      label: '一级 2',
      children: [
        {
          value: 5,
          label: '二级 2-1'
        },
        {
          value: 6,
          label: '二级 2-2'
        }
      ]
    }
  ]
})
</script>

<style scoped>
.tiny-tree-select {
  width: 280px;
}

p {
  font-size: 14px;
  line-height: 2.5;
}
</style>
