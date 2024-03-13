<template>
  <tiny-layout>
    <tiny-row>
      <tiny-col :span="2">
        <p>hover 激活</p>
        <tiny-dropdown trigger="hover">
          <span>更多</span>
          <template #dropdown>
            <tiny-dropdown-menu>
              <tiny-dropdown-item><icon-plus></icon-plus>黄金糕</tiny-dropdown-item>
              <tiny-dropdown-item><icon-plus-circle></icon-plus-circle>狮子头</tiny-dropdown-item>
              <tiny-dropdown-item><icon-plus-square></icon-plus-square>螺蛳粉</tiny-dropdown-item>
              <tiny-dropdown-item><icon-checked-linear></icon-checked-linear>双皮奶</tiny-dropdown-item>
              <tiny-dropdown-item><icon-checked-sur></icon-checked-sur>蚵仔煎</tiny-dropdown-item>
            </tiny-dropdown-menu>
          </template>
        </tiny-dropdown>
      </tiny-col>
      <tiny-col :span="2">
        <p>click 激活</p>
        <tiny-dropdown>
          <span>更多</span>
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
      <tiny-col :span="2">
        <p>二级菜单 click 激活</p>
        <tiny-dropdown>
          <span>更多</span>
          <template #dropdown>
            <tiny-dropdown-menu checked-status>
              <template #default="{ selectedIndex }">
                <tiny-dropdown-item :icon="IconPlus" :current-index="0" :selected="selectedIndex === '0'"
                  >这是一级这是一级这是一级这是一级这是一级这是一级这是一级这是一级这是一级这是一级</tiny-dropdown-item
                >
                <tiny-dropdown-item :icon="IconPlusCircle" :current-index="1" :selected="selectedIndex === '1'" disabled
                  >这是一级不可点击</tiny-dropdown-item
                >
                <tiny-dropdown-menu multi-stage checked-status>
                  <tiny-dropdown-item
                    :icon="IconPlusSquare"
                    level="2"
                    :current-index="0"
                    :selected="selectedIndex === '2-0'"
                    >这是二级</tiny-dropdown-item
                  >
                  <tiny-dropdown-item
                    :icon="IconCheckedLinear"
                    level="2"
                    :current-index="1"
                    :selected="selectedIndex === '2-1'"
                    >这是二级</tiny-dropdown-item
                  >
                </tiny-dropdown-menu>
                <tiny-dropdown-item :icon="IconCheckedSur" :current-index="3" :selected="selectedIndex === '3'"
                  >这是一级</tiny-dropdown-item
                >
              </template>
            </tiny-dropdown-menu>
          </template>
        </tiny-dropdown>
      </tiny-col>
    </tiny-row>
  </tiny-layout>
</template>

<script>
import { IconPlus, IconPlusCircle, IconPlusSquare, IconCheckedLinear, IconCheckedSur } from '@opentiny/vue-icon'
import { Layout, Row, Col, Dropdown, DropdownMenu, DropdownItem } from '@opentiny/vue'

export default {
  components: {
    TinyLayout: Layout,
    TinyRow: Row,
    TinyCol: Col,
    TinyDropdown: Dropdown,
    TinyDropdownMenu: DropdownMenu,
    TinyDropdownItem: DropdownItem,
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
