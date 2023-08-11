<template>
  <div>
    <tiny-button @click="edit('openEdit')">进入编辑</tiny-button>
    <tiny-button @click="edit('closeEdit')">取消编辑</tiny-button>
    <tiny-button @click="edit('saveEdit')">保存编辑</tiny-button>
    <br />
    <br />

    <tiny-tree ref="tree" node-key="id" :data="data" :default-expanded-keys="expandedKeys"></tiny-tree>
  </div>
</template>

<script lang="ts">
import { Tree, Button } from '@opentiny/vue'

export default {
  components: {
    TinyTree: Tree,
    TinyButton: Button
  },
  data() {
    return {
      expandedKeys: [1, 4],
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
                  label: '三级 1-1-1',
                  children: [
                    { id: 11, label: '三级 1-1-1-1' },
                    { id: 12, label: '三级 1-1-1-2' }
                  ]
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
    edit(action) {
      if (action === 'openEdit') {
        this.$refs.tree.openEdit()
      } else if (action === 'closeEdit') {
        this.$refs.tree.closeEdit()
      } else if (action === 'saveEdit') {
        const data = this.$refs.tree.saveEdit()
        this.data = data
      }
    }
  }
}
</script>
