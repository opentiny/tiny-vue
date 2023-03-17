<template>
  <tiny-layout>
    <tiny-row>
      <tiny-col :span="2">
        <p>hover 激活</p>
        <tiny-dropdown>
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
        <tiny-dropdown trigger="click">
          <template #dropdown>
            <tiny-dropdown-menu>
              <tiny-dropdown-item :icon="iconPlus">黄金糕</tiny-dropdown-item>
              <tiny-dropdown-item :icon="iconPlusCircle">狮子头</tiny-dropdown-item>
              <tiny-dropdown-item :icon="iconPlusSquare">螺蛳粉</tiny-dropdown-item>
              <tiny-dropdown-item :icon="iconCheckedLinear">双皮奶</tiny-dropdown-item>
              <tiny-dropdown-item :icon="iconCheckedSur">蚵仔煎</tiny-dropdown-item>
            </tiny-dropdown-menu>
          </template>
        </tiny-dropdown>
      </tiny-col>
    </tiny-row>
  </tiny-layout>
</template>

<script>
import { iconPlus, iconPlusCircle, iconPlusSquare, iconCheckedLinear, iconCheckedSur } from '@opentiny/vue-icon'
import { Layout, Row, Col, Dropdown, DropdownMenu, DropdownItem } from '@opentiny/vue'

export default {
  components: {
    TinyLayout: Layout,
    TinyRow: Row,
    TinyCol: Col,
    TinyDropdown: Dropdown,
    TinyDropdownMenu: DropdownMenu,
    TinyDropdownItem: DropdownItem,
    IconPlus: iconPlus(),
    IconPlusCircle: iconPlusCircle(),
    IconPlusSquare: iconPlusSquare(),
    IconCheckedLinear: iconCheckedLinear(),
    IconCheckedSur: iconCheckedSur()
  },
  data() {
    return {
      iconPlus: iconPlus(),
      iconPlusCircle: iconPlusCircle(),
      iconPlusSquare: iconPlusSquare(),
      iconCheckedLinear: iconCheckedLinear(),
      iconCheckedSur: iconCheckedSur()
    }
  }
}
</script>
