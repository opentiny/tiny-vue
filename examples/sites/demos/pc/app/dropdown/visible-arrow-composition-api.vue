<template>
  <div>
    <p>是否显示箭头：<tiny-switch v-model="isShowArrow"></tiny-switch></p>
    <br />
    <tiny-dropdown>
      <template #dropdown>
        <tiny-dropdown-menu :visible-arrow="isShowArrow" :key="isShowArrow">
          <tiny-dropdown-item label="老友粉"></tiny-dropdown-item>
          <tiny-dropdown-item>黄金糕</tiny-dropdown-item>
          <tiny-dropdown-item>狮子头</tiny-dropdown-item>
          <tiny-dropdown-item>螺蛳粉</tiny-dropdown-item>
          <tiny-dropdown-item disabled>双皮奶</tiny-dropdown-item>
          <tiny-dropdown-item divided>蚵仔煎</tiny-dropdown-item>
        </tiny-dropdown-menu>
      </template>
    </tiny-dropdown>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyDropdown, TinyDropdownMenu, TinyDropdownItem, TinySwitch } from '@opentiny/vue'

const isShowArrow = ref(true)
</script>
