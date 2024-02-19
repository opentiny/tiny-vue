<template>
  <div>
    <p>默认：</p>
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
    <p>其他尺寸：</p>
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

<script>
import { Dropdown, DropdownMenu, DropdownItem } from '@opentiny/vue'

export default {
  components: {
    TinyDropdown: Dropdown,
    TinyDropdownMenu: DropdownMenu,
    TinyDropdownItem: DropdownItem
  }
}
</script>

<style lang="less" scoped>
p {
  line-height: 1.5;
  font-size: 14px;
}

.tiny-dropdown {
  margin: 0 10px 10px 0;
}
</style>
