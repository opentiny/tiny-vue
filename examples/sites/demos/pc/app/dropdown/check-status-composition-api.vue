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

<script setup>
import {
  Dropdown as TinyDropdown,
  DropdownMenu as TinyDropdownMenu,
  DropdownItem as TinyDropdownItem
} from '@opentiny/vue'
</script>

<style lang="less" scoped>
p {
  line-height: 1.5;
  font-size: 14px;
  margin-top: 30px;
}
</style>
