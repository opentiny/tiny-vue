<template>
  <tiny-dropdown @visible-change="visibleChange">
    <span>更多</span>
    <template #dropdown>
      <tiny-dropdown-menu>
        <tiny-dropdown-item>黄金糕</tiny-dropdown-item>
        <tiny-dropdown-item>双皮奶</tiny-dropdown-item>
        <tiny-dropdown-item>蚵仔煎</tiny-dropdown-item>
        <tiny-dropdown-item>龙须面</tiny-dropdown-item>
        <tiny-dropdown-item>北京烤鸭</tiny-dropdown-item>
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
    visibleChange(status) {
      Modal.message({
        message: `下拉菜单显隐事件，当前为${status ? '显示' : '隐藏'}`,
        status: 'info'
      })
    }
  }
}
</script>
