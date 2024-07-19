<template>
  <div>
    <p>场景1：自定义图标 + 自定义样式</p>
    <tiny-tree-select
      v-model="value"
      :tree-op="treeOp"
      :dropdown-icon="tinyIconPopup"
      :drop-style="{ width: '200px', 'min-width': '200px' }"
    >
    </tiny-tree-select>
    <p>场景2：标签类型</p>
    <tiny-tree-select v-model="value2" :tree-op="treeOp" multiple tag-type="warning"></tiny-tree-select>
    <p>场景3：下划线类型</p>
    <tiny-tree-select v-model="value" :tree-op="treeOp" input-box-type="underline"></tiny-tree-select>
  </div>
</template>

<script>
import { TreeSelect } from '@opentiny/vue'
import { iconPopup } from '@opentiny/vue-icon'

export default {
  components: {
    TinyTreeSelect: TreeSelect
  },
  data() {
    return {
      tinyIconPopup: iconPopup(),
      value: '',
      value2: [],
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
