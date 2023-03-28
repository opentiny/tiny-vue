<template>
  <div>
    <tiny-button @click="getNode" title="根据 key 拿到节点对象">根据 key 拿到节点对象</tiny-button>
    <tiny-button @click="setChecked" title="通过 data 设置节点的勾选状态">通过 data 设置节点的勾选状态</tiny-button>
    <tiny-button @click="setCheckedKeys" title="通过 key 设置节点的当前选中状态">通过 key 设置节点的当前选中状态</tiny-button>
    <tiny-button @click="setCheckedNodes" title="通过 node 设置节点的当前选中状态">通过 node 设置节点的当前选中状态</tiny-button>
    <tiny-button @click="updateKeyChildren" title="通过 keys 设置节点子元素">通过 keys 设置节点子元素</tiny-button>
    <tiny-tree :data="data" ref="tree" default-expand-all show-checkbox node-key="id"></tiny-tree>
  </div>
</template>

<script lang="jsx">
import { Tree, Button, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyTree: Tree,
    TinyButton: Button
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
    getNode() {
      Modal.message({
        message: `${this.$refs.tree.getNode(3).data.label}`,
        status: 'info'
      })
    },
    setChecked() {
      this.$refs.tree.setChecked(this.$refs.tree.getNode(8).data, true)
    },
    setCheckedKeys() {
      this.$refs.tree.setCheckedKeys([9])
    },
    setCheckedNodes() {
      this.$refs.tree.setCheckedNodes([{ id: 10, label: '三级 1-1-2' }])
    },
    updateKeyChildren() {
      this.$refs.tree.updateKeyChildren(8, [{ id: 11, label: '三级 3-3-1' }])
    }
  }
}
</script>
