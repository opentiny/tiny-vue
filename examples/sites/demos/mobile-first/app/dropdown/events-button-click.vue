<template>
  <tiny-dropdown single-button @button-click="buttonClick">
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
import { TinyDropdown, TinyDropdownMenu, TinyDropdownItem, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyDropdown,
    TinyDropdownMenu,
    TinyDropdownItem
  },
  methods: {
    buttonClick() {
      TinyModal.message({ message: '下拉菜单内置按钮点击事件', status: 'info' })
    }
  }
}
</script>
