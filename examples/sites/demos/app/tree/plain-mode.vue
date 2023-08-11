<template>
  <div>
    <tiny-input placeholder="输入关键字进行搜索" v-model="filterText"></tiny-input>
    <tiny-tree
      ref="tree"
      show-checkbox
      node-key="id"
      class="filter-tree"
      :view-type="viewType"
      :data="data"
      default-expand-all
      :filter-node-method="filterNode"
      :filter-plain-method="filterPlain"
      @leave-plain-view="leavePlainView"
      @check-plain="checkPlain"
    ></tiny-tree>
  </div>
</template>

<script lang="ts">
import { Tree, Input, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyTree: Tree,
    TinyInput: Input
  },
  data() {
    return {
      filterText: '',
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
      ],
      viewType: 'tree'
    }
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val)

      if (this.filterText) {
        this.viewType = 'plain'
      } else {
        this.viewType = 'tree'
      }
    }
  },
  methods: {
    filterNode(value, data, node) {
      if (!value) return true
      return data.label.includes(value)
    },

    // 平铺视图过滤节点方法
    filterPlain(data) {
      return this.filterNode(this.filterText, data)
    },

    // 平铺视图节点勾选事件
    checkPlain(plainNode, value) {
      const msg = value ? '勾选节点' : '取消勾选节点'
      Modal.message(msg + plainNode.title)
    },

    // 平铺视图点击定位图标事件
    leavePlainView(plainNode, event) {
      console.log(plainNode, event)
      this.viewType = 'tree'
      this.$refs.tree.setCurrentKey(plainNode.nodeKey)
    }
  }
}
</script>
