<template>
  <div>
    <tiny-button @click="edit('openEdit')">进入编辑</tiny-button>
    <tiny-button @click="edit('closeEdit')">取消编辑</tiny-button>
    <tiny-button @click="edit('saveEdit')">保存编辑</tiny-button>
    <br />
    <br />

    <tiny-tree ref="treeRef" node-key="id" :data="data" :default-expanded-keys="expandedKeys">
      <!-- 操作插槽 -->
      <template #operation="{ node }">
        <div class="operation-slot" @click.stop="operationHandler($event, node)">
          <tiny-icon-ellipsis></tiny-icon-ellipsis>
        </div>
      </template>
    </tiny-tree>

    <tiny-popover ref="popoverRef" :reference="referenceElm" trigger="click">
      <div>
        <p class="label">{{ node.label }}</p>
        <hr />
        <p style="cursor: pointer" @click="operationItemHandler('email', node)">
          <tiny-icon-sent></tiny-icon-sent> 邮件
        </p>
        <p style="cursor: pointer" @click="operationItemHandler('share', node)">
          <tiny-icon-share></tiny-icon-share> 分享
        </p>
      </div>
    </tiny-popover>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Tree as TinyTree, Button as TinyButton, Popover as TinyPopover, Modal } from '@opentiny/vue'
import { iconEllipsis, iconShare, iconSent } from '@opentiny/vue-icon'

const referenceElm = ref(null)
const node = ref({})
const expandedKeys = ref([1, 4])
const data = ref([
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
])
const treeRef = ref()
const popoverRef = ref()
const TinyIconEllipsis = iconEllipsis()
const TinyIconShare = iconShare()
const TinyIconSent = iconSent()

function edit(action) {
  if (action === 'openEdit') {
    treeRef.value.openEdit()
  } else if (action === 'closeEdit') {
    treeRef.value.closeEdit()
  } else if (action === 'saveEdit') {
    data.value = treeRef.value.saveEdit()
  }
}

function operationHandler(event, nodes) {
  referenceElm.value = event.currentTarget
  const popoverRef = popoverRef.value
  console.log(popoverRef)
  popoverRef.doClose()

  setTimeout(() => {
    node.value = nodes
    popoverRef.doShow()
  }, 300)
  console.log('node', nodes)
}

function operationItemHandler(type, node) {
  Modal.message(type + ': ' + node.label)
}
</script>
