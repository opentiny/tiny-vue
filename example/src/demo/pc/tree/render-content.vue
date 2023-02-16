<template>
  <tiny-tree :data="treeData" show-checkbox node-key="id" default-expand-all :expand-on-click-node="false" :render-content="renderTinyContent"></tiny-tree>
</template>

<script lang="jsx">
import { Tree } from '@opentiny/vue'

let id = 1000

export default {
  components: {
    TinyTree: Tree
  },
  data() {
    return {
      treeData: [
        {
          id: 1,
          label: '一级 1',
          children: [
            {
              id: 4,
              label: '二级 1-1',
              children: [
                {
                  id: 9,
                  label: '三级 1-1-1'
                },
                {
                  id: 10,
                  label: '三级 1-1-2'
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: '一级 2',
          children: [
            {
              id: 5,
              label: '二级 2-1'
            },
            {
              id: 6,
              label: '二级 2-2'
            }
          ]
        },
        {
          id: 3,
          label: '一级 3',
          children: [
            {
              id: 7,
              label: '二级 3-1'
            },
            {
              id: 8,
              label: '二级 3-2'
            }
          ]
        }
      ]
    }
  },
  methods: {
    appendTinyNode(data) {
      const newChild = { id: id++, label: 'customTest', children: [] }

      if (!data.children) {
        data.children = []
      }

      data.children.push(newChild)
      this.treeData = [...this.treeData]
    },
    removeTinyNode(node, data) {
      const parentNode = node.parent
      const childrenNode = parentNode.data.children || parentNode.data
      const index = childrenNode.findIndex((d) => d.id === data.id)

      childrenNode.splice(index, 1)

      this.treeData = [...this.treeData]
    },
    renderTinyContent(h, { node, data }) {
      return (
        <span>
          <span>{node.label}</span>
          <span>
            <button onClick={() => this.appendTinyNode(data)}>添加节点</button>
            <button onClick={() => this.removeTinyNode(node, data)}>删除节点</button>
          </span>
        </span>
      )
    }
  }
}
</script>
