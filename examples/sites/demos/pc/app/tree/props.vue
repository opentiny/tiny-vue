<template>
  <div>
    <tiny-tree :data="data" :props="props" default-expand-all></tiny-tree>
  </div>
</template>

<script lang="jsx">
import { Tree } from '@opentiny/vue'

export default {
  components: {
    TinyTree: Tree
  },
  data() {
    return {
      props: {
        children: 'children',
        label: 'name', // 别名
        disabled: 'disabled',
        isLeaf: 'isLeaf'
      },
      data: [
        {
          id: '1',
          name: '数据 1',
          children: [
            { id: '1-1', name: '数据 1-1', children: [{ id: '1-1-1', name: '数据 1-1-1' }] },
            { id: '1-2', name: '数据 1-2' }
          ]
        },
        {
          id: '2',
          name: '数据 2',
          disabled: true,
          children: [
            { id: '2-1', name: '数据 2-1', disabled: true },
            { id: '2-2', name: '数据 2-2', disabled: true }
          ]
        },
        {
          id: '3',
          name: '数据 3',
          children: [{ id: '3-1', name: '数据 3-1' }]
        }
      ]
    }
  }
}
</script>
