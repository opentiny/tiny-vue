<template>
  <div>
    <span class="red">手风琴模式，父子严格显示自动勾选</span>
    <tiny-tree :data="data" accordion show-checkbox check-strictly show-check-easily :icon-trigger-click-node="false">
    </tiny-tree>
    <br />
    <span class="red">非手风琴模式，自定义自动勾选的内容</span>
    <tiny-tree :data="data" accordion show-checkbox check-strictly show-check-easily :icon-trigger-click-node="false">
      <template #switchText>
        <span>自定义开关的内容</span>
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
</script>

<style scoped>
.red {
  color: red;
}
</style>
