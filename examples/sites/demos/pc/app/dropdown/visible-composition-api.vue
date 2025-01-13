<template>
  <tiny-dropdown v-model:visible="visible" @item-click="itemClick">
    <div @click="handleClick">点击{{ visible ? '隐藏' : '显示' }}</div>
    <template #dropdown>
      <tiny-dropdown-menu>
        <tiny-dropdown-item
          v-for="(item, index) in options"
          :key="index"
          :label="item.label"
          :disabled="item.disabled"
          :item-data="item"
        ></tiny-dropdown-item>
      </tiny-dropdown-menu>
    </template>
  </tiny-dropdown>
</template>

<script setup>
import { ref } from 'vue'
import { TinyDropdown, TinyDropdownMenu, TinyDropdownItem } from '@opentiny/vue'

const visible = ref(true)
const options = [
  {
    label: '黄金糕'
  },
  {
    label: '点击我隐藏'
  },
  {
    label: '螺蛳粉'
  },
  {
    label: '双皮奶'
  },
  {
    label: '蚵仔煎'
  }
]
const itemClick = (e) => {
  if (e.itemData.label === '点击我隐藏') {
    visible.value = false
  }
}
const handleClick = () => {
  visible.value = !visible.value
}
</script>
