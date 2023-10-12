<template>
  <div>
    <p>默认</p>
    <tiny-dropdown split-button type="success">
      更多菜单
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
    <p>设置inherit-width</p>
  </div>
  <tiny-dropdown split-button type="success" :inherit-width="true">
    更多菜单
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

<script lang="jsx">
import { Dropdown, DropdownMenu, DropdownItem } from '@opentiny/vue'

export default {
  components: {
    TinyDropdown: Dropdown,
    TinyDropdownMenu: DropdownMenu,
    TinyDropdownItem: DropdownItem
  }
}
</script>
