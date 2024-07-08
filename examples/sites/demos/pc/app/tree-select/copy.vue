<template>
  <div>
    <p>场景1：一键复制所有标签</p>
    <tiny-tree-select v-model="value2" :tree-op="treeOp" multiple copyable></tiny-tree-select>
    <p>场景2：设置复制文本分隔符</p>
    <tiny-tree-select v-model="value2" :tree-op="treeOp" multiple copyable text-split="/"></tiny-tree-select>
    <p>粘贴至此处：</p>
    <tiny-input v-model="inputVal" type="text"></tiny-input>
  </div>
</template>

<script>
import { TreeSelect, Input } from '@opentiny/vue'

export default {
  components: {
    TinyTreeSelect: TreeSelect,
    TinyInput: Input
  },
  data() {
    return {
      value1: '',
      value2: [],
      inputVal: '',
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
.tiny-tree-select,
.tiny-input {
  width: 280px;
}

p {
  font-size: 14px;
  line-height: 2.5;
}
</style>
