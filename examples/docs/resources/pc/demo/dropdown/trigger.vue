<template>
  <tiny-layout>
    <tiny-row>
      <tiny-col :span="2">
        <p>hover 激活</p>
        <tiny-dropdown :hide-timeout="1000">
          <span>
            <span>下拉菜单</span>
            <icon-chevron-down></icon-chevron-down>
          </span>
          <template #dropdown>
            <tiny-dropdown-menu>
              <tiny-dropdown-item><icon-plus></icon-plus> 黄金糕</tiny-dropdown-item>
              <tiny-dropdown-item><icon-plus-circle></icon-plus-circle> 狮子头</tiny-dropdown-item>
              <tiny-dropdown-item><icon-plus-square></icon-plus-square> 螺蛳粉</tiny-dropdown-item>
              <tiny-dropdown-item><icon-checked-linear></icon-checked-linear> 双皮奶</tiny-dropdown-item>
              <tiny-dropdown-item><icon-checked-sur></icon-checked-sur> 蚵仔煎</tiny-dropdown-item>
            </tiny-dropdown-menu>
          </template>
        </tiny-dropdown>
      </tiny-col>
      <tiny-col :span="2">
        <p>click 激活</p>
        <tiny-dropdown :show-timeout="1000" trigger="click">
          <span>
            <span>下拉菜单</span>
            <icon-chevron-down></icon-chevron-down>
          </span>
          <template #dropdown>
            <tiny-dropdown-menu>
              <tiny-dropdown-item :icon="IconPlus">黄金糕</tiny-dropdown-item>
              <tiny-dropdown-item :icon="IconPlusCircle">狮子头</tiny-dropdown-item>
              <tiny-dropdown-item :icon="IconPlusSquare">螺蛳粉</tiny-dropdown-item>
              <tiny-dropdown-item :icon="IconCheckedLinear">双皮奶</tiny-dropdown-item>
              <tiny-dropdown-item :icon="IconCheckedSur">蚵仔煎</tiny-dropdown-item>
            </tiny-dropdown-menu>
          </template>
        </tiny-dropdown>
      </tiny-col>
    </tiny-row>
  </tiny-layout>
</template>

<script lang="jsx">
import { IconChevronDown, IconPlus, IconPlusCircle, IconPlusSquare, IconCheckedLinear, IconCheckedSur } from '@opentiny/vue-icon'
import { Layout, Row, Col, Dropdown, DropdownMenu, DropdownItem } from '@opentiny/vue'

export default {
  components: {
    TinyLayout: Layout,
    TinyRow: Row,
    TinyCol: Col,
    TinyDropdown: Dropdown,
    TinyDropdownMenu: DropdownMenu,
    TinyDropdownItem: DropdownItem,
    IconChevronDown: IconChevronDown(),
    IconPlus: IconPlus(),
    IconPlusCircle: IconPlusCircle(),
    IconPlusSquare: IconPlusSquare(),
    IconCheckedLinear: IconCheckedLinear(),
    IconCheckedSur: IconCheckedSur()
  },
  data() {
    return {
      IconPlus: IconPlus(),
      IconPlusCircle: IconPlusCircle(),
      IconPlusSquare: IconPlusSquare(),
      IconCheckedLinear: IconCheckedLinear(),
      IconCheckedSur: IconCheckedSur()
    }
  }
}
</script>
