<template>
  <tiny-layout>
    <tiny-row>
      <tiny-col :span="2">
        <p>hover 激活</p>
        <tiny-dropdown>
          <template #dropdown>
            <tiny-dropdown-menu>
              <tiny-dropdown-item><tiny-icon-plus></tiny-icon-plus> 黄金糕</tiny-dropdown-item>
              <tiny-dropdown-item><tiny-icon-plus-circle></tiny-icon-plus-circle> 狮子头</tiny-dropdown-item>
              <tiny-dropdown-item><tiny-icon-plus-square></tiny-icon-plus-square> 螺蛳粉</tiny-dropdown-item>
              <tiny-dropdown-item><tiny-icon-checked-linear></tiny-icon-checked-linear> 双皮奶</tiny-dropdown-item>
              <tiny-dropdown-item><tiny-icon-checked-sur></tiny-icon-checked-sur> 蚵仔煎</tiny-dropdown-item>
            </tiny-dropdown-menu>
          </template>
        </tiny-dropdown>
      </tiny-col>
      <tiny-col :span="2">
        <p>click 激活</p>
        <tiny-dropdown trigger="click">
          <template #dropdown>
            <tiny-dropdown-menu>
              <tiny-dropdown-item :icon="TinyIconPlus">黄金糕</tiny-dropdown-item>
              <tiny-dropdown-item :icon="TinyIconPlusCircle">狮子头</tiny-dropdown-item>
              <tiny-dropdown-item :icon="TinyIconPlusSquare">螺蛳粉</tiny-dropdown-item>
              <tiny-dropdown-item :icon="TinyIconCheckedLinear">双皮奶</tiny-dropdown-item>
              <tiny-dropdown-item :icon="TinyIconCheckedSur">蚵仔煎</tiny-dropdown-item>
            </tiny-dropdown-menu>
          </template>
        </tiny-dropdown>
      </tiny-col>
    </tiny-row>
  </tiny-layout>
</template>

<script setup>
import { iconPlus, iconPlusCircle, iconPlusSquare, iconCheckedLinear, iconCheckedSur } from '@opentiny/vue-icon'
import {
  Layout as TinyLayout,
  Row as TinyRow,
  Col as TinyCol,
  Dropdown as TinyDropdown,
  DropdownMenu as TinyDropdownMenu,
  DropdownItem as TinyDropdownItem
} from '@opentiny/vue'

const TinyIconPlus = iconPlus()
const TinyIconPlusCircle = iconPlusCircle()
const TinyIconPlusSquare = iconPlusSquare()
const TinyIconCheckedLinear = iconCheckedLinear()
const TinyIconCheckedSur = iconCheckedSur()
</script>
