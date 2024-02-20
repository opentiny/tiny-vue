<template>
  <tiny-dropdown>
    <span>更多</span>
    <template #dropdown>
      <tiny-dropdown-menu checked-status>
        <template #default="{ selectedIndex }">
          <tiny-dropdown-item :current-index="0" :selected="selectedIndex === '0'">选择一</tiny-dropdown-item>
          <tiny-dropdown-item :current-index="1" :selected="selectedIndex === '1'">选择二</tiny-dropdown-item>
          <tiny-dropdown-item :current-index="2" :selected="selectedIndex === '2'">选择三</tiny-dropdown-item>
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

<style lang="less" scoped>
p {
  line-height: 1.5;
  font-size: 14px;
  margin-top: 30px;
}
</style>
