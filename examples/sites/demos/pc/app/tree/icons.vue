<template>
  <div class="icon-demo">
    <tiny-tree :data="data" :icon="icon"></tiny-tree>
    <tiny-tree
      :data="data"
      :expandIcon="expandIcon"
      expandIconColor="red"
      :shrinkIcon="shrinkIcon"
      shrinkIconColor="blue"
    ></tiny-tree>
  </div>
</template>

<script lang="jsx">
import { Tree } from '@opentiny/vue'
import { iconPlusSquare, iconMinusSquare, iconRightO } from '@opentiny/vue-icon'

export default {
  components: {
    TinyTree: Tree
  },
  data() {
    return {
      icon: iconRightO(),
      shrinkIcon: iconMinusSquare(),
      expandIcon: iconPlusSquare(),
      data: [
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
      ]
    }
  }
}
</script>

<style scoped>
.icon-demo {
  display: flex;
  margin: 16px;
}
.icon-demo .tiny-tree {
  flex: 1;
}
</style>
