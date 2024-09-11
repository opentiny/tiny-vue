<template>
  <div class="demo-drop">
    <p class="demo-dropdown">默认：</p>
    <tiny-dropdown split-button type="primary">
      默认尺寸
      <template #dropdown>
        <tiny-dropdown-menu>
          <tiny-dropdown-item>黄金糕</tiny-dropdown-item>
          <tiny-dropdown-item>狮子头</tiny-dropdown-item>
          <tiny-dropdown-item>螺蛳粉</tiny-dropdown-item>
          <tiny-dropdown-item>双皮奶</tiny-dropdown-item>
          <tiny-dropdown-item>蚵仔煎</tiny-dropdown-item>
        </tiny-dropdown-menu>
      </template>
    </tiny-dropdown>
    <p class="demo-dropdown">其他尺寸：</p>
    <tiny-dropdown size="medium" split-button type="primary">
      中等尺寸
      <template #dropdown>
        <tiny-dropdown-menu>
          <tiny-dropdown-item>黄金糕</tiny-dropdown-item>
          <tiny-dropdown-item>狮子头</tiny-dropdown-item>
          <tiny-dropdown-item>螺蛳粉</tiny-dropdown-item>
          <tiny-dropdown-item>双皮奶</tiny-dropdown-item>
          <tiny-dropdown-item>蚵仔煎</tiny-dropdown-item>
        </tiny-dropdown-menu>
      </template>
    </tiny-dropdown>

    <tiny-dropdown size="small" split-button type="primary">
      小型尺寸
      <template #dropdown>
        <tiny-dropdown-menu>
          <tiny-dropdown-item>黄金糕</tiny-dropdown-item>
          <tiny-dropdown-item>狮子头</tiny-dropdown-item>
          <tiny-dropdown-item>螺蛳粉</tiny-dropdown-item>
          <tiny-dropdown-item>双皮奶</tiny-dropdown-item>
          <tiny-dropdown-item>蚵仔煎</tiny-dropdown-item>
        </tiny-dropdown-menu>
      </template>
    </tiny-dropdown>

    <tiny-dropdown size="mini" split-button type="primary">
      超小尺寸
      <template #dropdown>
        <tiny-dropdown-menu>
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
</script>

<style lang="less" scoped>
p {
  line-height: 1.5;
  font-size: 14px;
}

.tiny-dropdown {
  margin: 0 10px 10px 0;
}
.demo-dropdown {
  margin-bottom: 8px;
}
</style>

<style>
.demo-drop .tiny-dropdown .tiny-dropdown__trigger.tiny-dropdown__caret-button {
  padding-left: 14px;
  padding-right: 14px;
}
</style>
