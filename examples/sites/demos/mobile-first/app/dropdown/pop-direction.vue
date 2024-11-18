<template>
  <tiny-layout>
    <tiny-row>
      <tiny-col :span="2">
        <p>默认</p>
        <tiny-dropdown>
          <span>更多</span>
          <template #dropdown>
            <tiny-dropdown-menu>
              <tiny-dropdown-item>选择一</tiny-dropdown-item>
              <tiny-dropdown-item>选择二</tiny-dropdown-item>
              <tiny-dropdown-item>选择三</tiny-dropdown-item>
            </tiny-dropdown-menu>
          </template>
        </tiny-dropdown>
      </tiny-col>
      <tiny-col :span="2">
        <p>下居中</p>
        <tiny-dropdown>
          <span>更多</span>
          <template #dropdown>
            <tiny-dropdown-menu placement="bottom">
              <tiny-dropdown-item>选择一</tiny-dropdown-item>
              <tiny-dropdown-item>选择二</tiny-dropdown-item>
              <tiny-dropdown-item>选择三</tiny-dropdown-item>
            </tiny-dropdown-menu>
          </template>
        </tiny-dropdown>
      </tiny-col>
      <tiny-col :span="2">
        <p>下偏左</p>
        <tiny-dropdown>
          <span>更多</span>
          <template #dropdown>
            <tiny-dropdown-menu placement="bottom-end">
              <tiny-dropdown-item>选择一</tiny-dropdown-item>
              <tiny-dropdown-item>选择二</tiny-dropdown-item>
              <tiny-dropdown-item>选择三</tiny-dropdown-item>
            </tiny-dropdown-menu>
          </template>
        </tiny-dropdown>
      </tiny-col>
    </tiny-row>
  </tiny-layout>
</template>

<script>
import { TinyLayout, TinyRow, TinyCol, TinyDropdown, TinyDropdownMenu, TinyDropdownItem } from '@opentiny/vue'

export default {
  components: {
    TinyLayout,
    TinyRow,
    TinyCol,
    TinyDropdown,
    TinyDropdownMenu,
    TinyDropdownItem
  }
}
</script>
