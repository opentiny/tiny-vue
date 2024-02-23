<template>
  <div>
    <tiny-tree
      ref="treeRef"
      :data="data"
      default-expand-all
      :show-contextmenu="true"
      @node-contextmenu="nodeContextmenu"
    >
      <template #contextmenu="{ data, node }">
        <ul class="context-menu">
          <li @click="add(data)">新增子节点</li>
          <li @click="update(data)">更新</li>
          <li @click="remove(data, node)">删除</li>
        </ul>
      </template>
    </tiny-tree>
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
  },
  methods: {
    add(data) {
      console.log('点击了添加子节点', data)
      this.$refs.treeRef.closeMenu()
    },
    update(data) {
      console.log('点击了更新', data)
      this.$refs.treeRef.closeMenu()
    },
    remove(data, node) {
      console.log('点击了删除', { data, node })
      this.$refs.treeRef.closeMenu()
    },
    nodeContextmenu(event, data, node, vm) {
      console.log('触发了右键事件：', { event, data, node, vm })
    }
  }
}
</script>

<style scoped>
.context-menu {
  background-color: #fff;
}

.context-menu li {
  width: 120px;
  padding: 8px 10px;
  border-bottom: 1px solid #ccc;
  font-size: 12px;
}

.context-menu li:hover {
  background: #eee;
}
</style>
