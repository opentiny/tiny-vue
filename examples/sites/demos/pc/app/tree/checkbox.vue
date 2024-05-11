<template>
  <div class="checkbox-demo">
    <div>
      <div class="tip">非严格模式，点击即勾选</div>
      <tiny-tree
        node-key="id"
        :data="data"
        show-checkbox
        :check-on-click-node="true"
        :default-checked-keys="['2']"
        default-expand-all
        :expand-on-click-node="false"
      ></tiny-tree>
    </div>
    <div style="margin-left: 30px">
      <div class="tip">严格模式，点击非勾选</div>
      <tiny-tree
        node-key="id"
        :data="data"
        show-checkbox
        check-strictly
        :check-on-click-node="false"
        :default-checked-keys="['3-1']"
        default-expand-all
        :expand-on-click-node="false"
      ></tiny-tree>
    </div>
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
      data: [
        {
          id: '1',
          label: '数据 1',
          disabled: true,
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
.checkbox-demo {
  display: flex;
  margin: 16px;
}
.checkbox-demo .tiny-tree {
  flex: 1;
  min-width: 300px;
}
.checkbox-demo div {
  margin-bottom: 8px;
}
.tip {
  font-weight: bold;
}
</style>
