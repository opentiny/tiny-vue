<template>
  <tiny-dropdown @visible-change="visibleChange">
    <span>默认插槽</span>
    <template #suffix-icon>
      <tiny-icon-sandwich-collapse></tiny-icon-sandwich-collapse>
    </template>
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

<script setup>
import { iconSandwichCollapse } from '@opentiny/vue-icon'
import {
  Dropdown as TinyDropdown,
  DropdownMenu as TinyDropdownMenu,
  DropdownItem as TinyDropdownItem
} from '@opentiny/vue'

const TinyIconSandwichCollapse = iconSandwichCollapse()
</script>
