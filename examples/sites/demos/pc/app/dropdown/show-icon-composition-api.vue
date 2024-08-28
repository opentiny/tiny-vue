<template>
  <div>
    <p>场景1： 只显示文本</p>
    <tiny-dropdown :show-icon="false">
      <template #dropdown>
        <tiny-dropdown-menu>
          <tiny-dropdown-item label="老友粉"></tiny-dropdown-item>
          <tiny-dropdown-item>黄金糕</tiny-dropdown-item>
          <tiny-dropdown-item>狮子头</tiny-dropdown-item>
          <tiny-dropdown-item>螺蛳粉</tiny-dropdown-item>
          <tiny-dropdown-item>双皮奶</tiny-dropdown-item>
          <tiny-dropdown-item>蚵仔煎</tiny-dropdown-item>
        </tiny-dropdown-menu>
      </template>
    </tiny-dropdown>
    <p>场景2：自定义图且只显示图标</p>
    <tiny-dropdown title="" :suffix-icon="tinyIconEllipsis" class="only-icon">
      <template #dropdown>
        <tiny-dropdown-menu>
          <tiny-dropdown-item label="老友粉"></tiny-dropdown-item>
          <tiny-dropdown-item>黄金糕</tiny-dropdown-item>
          <tiny-dropdown-item>狮子头</tiny-dropdown-item>
          <tiny-dropdown-item>螺蛳粉</tiny-dropdown-item>
          <tiny-dropdown-item>双皮奶</tiny-dropdown-item>
          <tiny-dropdown-item>蚵仔煎</tiny-dropdown-item>
        </tiny-dropdown-menu>
      </template>
    </tiny-dropdown>
  </div>
</template>

<script setup>
import {
  Dropdown as TinyDropdown,
  DropdownMenu as TinyDropdownMenu,
  DropdownItem as TinyDropdownItem
} from '@opentiny/vue'
import { iconEllipsis } from '@opentiny/vue-icon'

const tinyIconEllipsis = iconEllipsis()
</script>

<style lang="less" scoped>
p {
  line-height: 1.5;
  font-size: 14px;
  margin-top: 30px;
}

.tiny-dropdown.only-icon {
  :deep(.tiny-dropdown__trigger) {
    .tiny-svg {
      fill: #191919;
      &:hover {
        fill: #191919;
      }
    }
  }
}
</style>
