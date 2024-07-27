<template>
  <div>
    <p>场景1：不挂载在 body 元素上</p>
    <tiny-tree-select v-model="value" :tree-op="treeOp" :popper-append-to-body="false"></tiny-tree-select>
    <p>场景2：自定义类名，修改阴影样式</p>
    <tiny-tree-select v-model="value" :tree-op="treeOp" popper-class="drop"></tiny-tree-select>
    <p>场景3：从上方弹出面板</p>
    <tiny-tree-select v-model="value" :tree-op="treeOp" placement="top"></tiny-tree-select>
  </div>
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

p {
  font-size: 14px;
  line-height: 2.5;
}
</style>

<style>
.drop {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>
