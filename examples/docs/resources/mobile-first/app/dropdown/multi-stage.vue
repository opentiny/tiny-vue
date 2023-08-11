<template>
  <tiny-dropdown>
    <span>更多</span>
    <template #dropdown>
      <tiny-dropdown-menu checked-status>
        <template #default="{ selectedIndex }">
          <tiny-dropdown-item :current-index="0" :selected="selectedIndex === '0'">这是一级</tiny-dropdown-item>
          <tiny-dropdown-item :current-index="1" :selected="selectedIndex === '1'" disabled>
            这是一级不可点击
          </tiny-dropdown-item>
          <tiny-dropdown-menu multi-stage checked-status>
            <tiny-dropdown-item level="2" :current-index="0" :selected="selectedIndex === '2-0'"
              >这是二级</tiny-dropdown-item
            >
            <tiny-dropdown-item level="2" :current-index="1" :selected="selectedIndex === '2-1'"
              >这是二级</tiny-dropdown-item
            >
          </tiny-dropdown-menu>
          <tiny-dropdown-item :current-index="3" :selected="selectedIndex === '3'">这是一级</tiny-dropdown-item>
        </template>
      </tiny-dropdown-menu>
    </template>
  </tiny-dropdown>
</template>

<script>
import { Dropdown, DropdownMenu, DropdownItem } from '@opentiny/vue'

export default {
  components: {
    TinyDropdown: Dropdown,
    TinyDropdownMenu: DropdownMenu,
    TinyDropdownItem: DropdownItem
  }
}
</script>
