<template>
  <div>
    <div class="tips">提示：手风琴模式，父子严格显示自动勾选</div>
    <tiny-tree :data="data" accordion show-checkbox check-strictly show-check-easily :icon-trigger-click-node="false">
    </tiny-tree>
    <br />
    <div class="tips">提示：非手风琴模式，自定义自动勾选的内容</div>
    <tiny-tree :data="data" show-checkbox check-strictly show-check-easily :icon-trigger-click-node="false">
      <template #switchText>
        <span>自定义开关的内容</span>
      </template>
    </tiny-tree>
  </div>
</template>

<script lang="jsx">
import { TinyTree } from '@opentiny/vue'

export default {
  components: {
    TinyTree
  },
  data() {
    return {
      data: [
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
      ]
    }
  }
}
</script>

<style scoped>
.tips {
  color: #888;
  margin: 12px 20px;
}
</style>
