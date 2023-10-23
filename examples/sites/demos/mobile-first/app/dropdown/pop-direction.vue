<template>
  <tiny-layout>
    <tiny-row>
      <tiny-col :span="2">
        <p>下居右</p>
        <tiny-dropdown>
          <span>更多</span>
          <template #dropdown>
            <tiny-dropdown-menu placement="bottom-start">
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
import { Layout, Row, Col, Dropdown, DropdownMenu, DropdownItem } from '@opentiny/vue'

export default {
  components: {
    TinyLayout: Layout,
    TinyRow: Row,
    TinyCol: Col,
    TinyDropdown: Dropdown,
    TinyDropdownMenu: DropdownMenu,
    TinyDropdownItem: DropdownItem
  }
}
</script>
