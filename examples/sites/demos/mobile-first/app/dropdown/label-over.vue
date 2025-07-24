<template>
  <tiny-dropdown>
    <span>更多</span>
    <template #dropdown>
      <tiny-dropdown-menu>
        <tiny-dropdown-item>选择一选择一选择一选择一选择一选择一选择一选择一选择一</tiny-dropdown-item>
        <tiny-dropdown-item>选择二</tiny-dropdown-item>
        <tiny-dropdown-item>选择三选择三选择三选择三选择三选择三选择三选择三选择三</tiny-dropdown-item>
      </tiny-dropdown-menu>
    </template>
  </tiny-dropdown>
</template>

<script>
import { TinyDropdown, TinyDropdownMenu, TinyDropdownItem } from '@opentiny/vue'

export default {
  components: {
    TinyDropdown,
    TinyDropdownMenu,
    TinyDropdownItem
  }
}
</script>
