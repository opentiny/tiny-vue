<template>
  <tiny-tree
    :data="data"
    show-checkbox
    node-key="id"
    default-expand-all
    :expand-on-click-node="false"
    :render-content="renderContent"
  ></tiny-tree>
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
      data: [
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
    append(data) {
      const newChild = { id: id++, label: 'testtest', children: [] }

      if (!data.children) {
        data.children = []
      }

      data.children.push(newChild)
      this.data = [...this.data]
    },
    remove(node, data) {
      const parent = node.parent
      const children = parent.data.children || parent.data
      const index = children.findIndex((d) => d.id === data.id)

      children.splice(index, 1)

      this.data = [...this.data]
    },
    renderContent(h, { node, data }) {
      return (
        <span class="custom-tree-node">
          <span>{node.label}</span>
          <span>
            <button size="mini" type="text" onClick={() => this.append(data)}>
              Append
            </button>
            <button size="mini" type="text" onClick={() => this.remove(node, data)}>
              Delete
            </button>
          </span>
        </span>
      )
    }
  }
}
</script>
