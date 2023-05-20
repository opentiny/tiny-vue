<template>
  <tiny-dropdown split-button>
    标准按钮
    <template #dropdown>
      <tiny-dropdown-menu>
        <tiny-dropdown-item>选择一</tiny-dropdown-item>
        <tiny-dropdown-item>选择二</tiny-dropdown-item>
        <tiny-dropdown-item>选择三</tiny-dropdown-item>
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
