<template>
  <tiny-dropdown @item-click="itemClick">
    <span>更多</span>
    <template #dropdown>
      <tiny-dropdown-menu>
        <tiny-dropdown-item item-data="1">黄金糕</tiny-dropdown-item>
        <tiny-dropdown-item item-data="2">双皮奶</tiny-dropdown-item>
        <tiny-dropdown-item item-data="3">蚵仔煎</tiny-dropdown-item>
        <tiny-dropdown-item item-data="4">龙须面</tiny-dropdown-item>
        <tiny-dropdown-item item-data="5">北京烤鸭</tiny-dropdown-item>
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
      Modal.message({ message: `点击菜单项触发的事件回调，当前为第${itemData}个菜单项`, status: 'info' })
    }
  }
}
</script>
