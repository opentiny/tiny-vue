<template>
  <div>
    <p>场景 1：只显示文本</p>
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
    <p>场景 2：自定义图且只显示图标</p>
    <tiny-dropdown class="only-icon" title="" :suffix-icon="tinyIconEllipsis">
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
    <p>场景 3：前置图标</p>
    <tiny-dropdown :prefix-icon="tinyIconLanguage" :show-icon="false">
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

<script>
import { TinyDropdown, TinyDropdownMenu, TinyDropdownItem } from '@opentiny/vue'
import { iconEllipsis, iconLanguage } from '@opentiny/vue-icon'

export default {
  components: {
    TinyDropdown,
    TinyDropdownMenu,
    TinyDropdownItem
  },
  data() {
    return {
      tinyIconEllipsis: iconEllipsis(),
      tinyIconLanguage: iconLanguage()
    }
  }
}
</script>

<style lang="less" scoped>
p {
  line-height: 1.5;
  font-size: 14px;
  margin-top: 30px;
}

.tiny-dropdown {
  &.only-icon {
    :deep(.tiny-dropdown__trigger) {
      .tiny-svg {
        fill: var(--tv-color-icon-control);
        &:hover {
          fill: var(--tv-color-icon-control);
        }
      }
    }
  }

  :deep(.tiny-dropdown__prefix-inner) {
    fill: var(--tv-color-icon-control);
  }
}
</style>
