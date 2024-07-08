<template>
  <tiny-tree-select v-model="value" :tree-op="treeOp" value-field="val" text-field="text"></tiny-tree-select>
</template>

<script>
import { TreeSelect } from '@opentiny/vue'

export default {
  components: {
    TinyTreeSelect: TreeSelect
  },
  data() {
    return {
      value: '',
      treeOp: {
        data: [
          {
            val: 1,
            text: '一级 1',
            children: [
              {
                val: 4,
                text: '二级 1-1',
                children: [
                  {
                    val: 9,
                    text: '三级 1-1-1'
                  },
                  {
                    val: 10,
                    text: '三级 1-1-2'
                  }
                ]
              }
            ]
          },
          {
            val: 2,
            text: '一级 2',
            children: [
              {
                val: 5,
                text: '二级 2-1'
              },
              {
                val: 6,
                text: '二级 2-2'
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
