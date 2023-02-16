<template>
  <tiny-dropdown split-button @item-click="itemClick" @button-click="buttonClick" @visible-change="visibleChange">
    下拉菜单
    <template #dropdown>
      <tiny-dropdown-menu>
        <tiny-dropdown-item>黄金糕</tiny-dropdown-item>
        <tiny-dropdown-item>狮子头</tiny-dropdown-item>
        <tiny-dropdown-item>螺蛳粉</tiny-dropdown-item>
        <tiny-dropdown-item disabled>双皮奶</tiny-dropdown-item>
        <tiny-dropdown-item divided>蚵仔煎</tiny-dropdown-item>
      </tiny-dropdown-menu>
    </template>
  </tiny-dropdown>
</template>

<script>
import { Dropdown, DropdownMenu, DropdownItem, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyDropdown: Dropdown,
    TinyDropdownMenu: DropdownMenu,
    TinyDropdownItem: DropdownItem
  },
  methods: {
    itemClick(itemData) {
      Modal.message({ message: itemData, status: 'info' })
    },
    buttonClick() {
      Modal.message({ message: '下拉菜单内置按钮点击事件', status: 'info' })
    },
    visibleChange(status) {
      Modal.message({
        message: `下拉菜单显隐事件，当前为${status ? '显示' : '隐藏'}`,
        status: 'info'
      })
    }
  }
}
</script>
