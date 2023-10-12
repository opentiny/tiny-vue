<template>
  <tiny-dropdown split-button @item-click="itemClick" @button-click="buttonClick" @visible-change="visibleChange">
    下拉菜单
    <template #dropdown>
      <tiny-dropdown-menu>
        <tiny-dropdown-item label="黄金糕"></tiny-dropdown-item>
        <tiny-dropdown-item>狮子头</tiny-dropdown-item>
        <tiny-dropdown-item>螺蛳粉</tiny-dropdown-item>
        <tiny-dropdown-item disabled>双皮奶</tiny-dropdown-item>
        <tiny-dropdown-item divided>蚵仔煎</tiny-dropdown-item>
      </tiny-dropdown-menu>
    </template>
  </tiny-dropdown>
</template>

<script lang="jsx">
import { Dropdown, DropdownMenu, DropdownItem, Notify } from '@opentiny/vue'

export default {
  components: {
    TinyDropdown: Dropdown,
    TinyDropdownMenu: DropdownMenu,
    TinyDropdownItem: DropdownItem
  },
  methods: {
    itemClick(data) {
      Notify({
        type: 'info',
        title: 'itemClick 回调事件',
        message: `使用 dropdown-item 的label属性：${data.vm.label}`,
        position: 'top-right',
        duration: 2000
      })
    },
    buttonClick() {
      Notify({ message: '下拉菜单内置按钮点击事件', status: 'info' })
    },
    visibleChange(status) {
      Notify({
        message: `下拉菜单显隐事件，当前为${status ? '显示' : '隐藏'}`,
        status: 'info'
      })
    }
  }
}
</script>
