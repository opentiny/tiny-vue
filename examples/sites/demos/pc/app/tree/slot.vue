<!-- eslint-disable vue/no-unused-vars -->
<template>
  <div class="slot-demo">
    <div>
      <tiny-button @click="loadData">加载数据</tiny-button>
      <tiny-button @click="clearData">清除数据</tiny-button>
    </div>
    <div>
      <div class="tip">5个插槽示例</div>
      <tiny-tree :data="data" default-expand-all>
        <!-- 前缀插槽 -->
        <template #prefix="{ node }">
          <div style="font-weight: bold">#</div>
        </template>
        <!-- 默认插槽 -->
        <template #default="node">
          <div style="color: red">{{ node.data.label }}</div>
        </template>
        <!-- 后缀插槽 -->
        <template #suffix="{ node }">
          <div style="font-weight: bold; color: blue">></div>
        </template>
        <!-- 操作插槽 -->
        <template #operation="{ node }">
          <div style="width: 80px; text-align: right">
            <tiny-link :underline="true" title="一些功能操作" type="primary"> 新增 </tiny-link> &nbsp;
            <tiny-link :underline="true" title="一些功能操作" type="danger"> 删除 </tiny-link>
          </div>
        </template>
        <!-- 无数据插槽 -->
        <template #empty>
          <div style="font-size: 20px">暂无数据！！！</div>
        </template>
      </tiny-tree>
    </div>
    <div>
      <div class="tip">render-content + empty-text 示例</div>
      <tiny-tree :data="data" empty-text="组件无数据" :render-content="renderContent" default-expand-all> </tiny-tree>
    </div>
  </div>
</template>

<script lang="jsx">
import { Tree, Link, Button } from '@opentiny/vue'
import { iconPlusSquare } from '@opentiny/vue-icon'

const TinyIconPlusSquare = iconPlusSquare()
export default {
  components: {
    TinyTree: Tree,
    TinyLink: Link,
    TinyButton: Button
  },
  data() {
    return {
      data: []
    }
  },
  methods: {
    loadData() {
      this.data = [
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
    },
    clearData() {
      this.data = []
    },
    renderContent(h, { node, data }) {
      return (
        <span>
          {node.label} <TinyIconPlusSquare fill="red" />
        </span>
      )
    }
  }
}
</script>

<style scoped>
.slot-demo {
  margin: 16px;
}
.slot-demo .tiny-tree {
  flex: 1;
}
.slot-demo > div {
  margin-bottom: 8px;
}
.tip {
  font-weight: bold;
  margin-bottom: 8px;
}
</style>
