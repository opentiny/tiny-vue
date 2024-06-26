<template>
  <tiny-tree-select v-model="value" :tree-op="treeOp"></tiny-tree-select>
</template>

<script>
import { TreeSelect } from '@opentiny/vue'

export default {
  components: {
    TinyTreeSelect: TreeSelect
  },
  data() {
    return {
      treeOp: {
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
      }
    }
  }
}
</script>

<style scoped>
.tiny-tree-select {
  width: 280px;
}
</style>
