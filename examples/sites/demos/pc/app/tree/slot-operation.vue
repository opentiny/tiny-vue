<template>
  <div>
    <tiny-button @click="edit('openEdit')">进入编辑</tiny-button>
    <tiny-button @click="edit('closeEdit')">取消编辑</tiny-button>
    <tiny-button @click="edit('saveEdit')">保存编辑</tiny-button>
    <br />
    <br />

    <tiny-tree ref="tree" node-key="id" :data="data" :default-expanded-keys="expandedKeys">
      <!-- 操作插槽 -->
      <template #operation="{ node }">
        <div class="operation-slot" @click.stop="operationHandler($event, node)"><icon-ellipsis></icon-ellipsis></div>
      </template>
    </tiny-tree>

    <tiny-popover ref="popover" :reference="referenceElm" trigger="click">
      <div>
        <p class="label">{{ node.label }}</p>
        <hr />
        <p style="cursor: pointer" @click="operationItemHandler('email', node)"><icon-sent></icon-sent> 邮件</p>
        <p style="cursor: pointer" @click="operationItemHandler('share', node)"><icon-share></icon-share> 分享</p>
      </div>
    </tiny-popover>
  </div>
</template>

<script>
import { Tree, Button, Popover, Modal } from '@opentiny/vue'
import { iconEllipsis, iconShare, iconSent } from '@opentiny/vue-icon'

export default {
  components: {
    IconEllipsis: iconEllipsis(),
    IconShare: iconShare(),
    IconSent: iconSent(),
    TinyPopover: Popover,
    TinyTree: Tree,
    TinyButton: Button
  },
  data() {
    return {
      referenceElm: null,
      node: {},
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
    },
    operationHandler(event, node) {
      this.referenceElm = event.currentTarget
      const popoverRef = this.$refs.popover
      console.log(popoverRef)
      popoverRef.doClose()

      setTimeout(() => {
        this.node = node
        popoverRef.doShow()
      }, 300)
      console.log('node', node)
    },
    operationItemHandler(type, node) {
      Modal.message(type + ': ' + node.label)
    }
  }
}
</script>
