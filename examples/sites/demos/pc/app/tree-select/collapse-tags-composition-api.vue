<template>
  <div>
    <p>场景1： collapse-tags 折叠</p>
    <tiny-tree-select v-model="value" :tree-op="treeOp" multiple collapse-tags></tiny-tree-select>
    <p>场景2： hover-expand 折叠</p>
    <tiny-tree-select v-model="value" :tree-op="treeOp" multiple hover-expand></tiny-tree-select>
    <br />
    <br />
    <p>场景3： click-expand 折叠</p>
    <tiny-tree-select v-model="value" :tree-op="treeOp" multiple click-expand :max-visible-rows="1"></tiny-tree-select>
    <br />
    <br />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TreeSelect as TinyTreeSelect } from '@opentiny/vue'

const value = ref([])

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
          label: 'OpenTiny 是一套企业级 Web 前端开发解决方案，提供跨端、跨框架、跨版本的 TinyVue 组件库'
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
