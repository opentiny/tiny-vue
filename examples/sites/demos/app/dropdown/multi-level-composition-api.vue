<template>
  <div>
    <tiny-dropdown @item-click="itemClick">
      <template #dropdown>
        <tiny-dropdown-menu :options="options"> </tiny-dropdown-menu>
      </template>
    </tiny-dropdown>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { iconStarDisable } from '@opentiny/vue-icon'
import { Dropdown as TinyDropdown, DropdownMenu as TinyDropdownMenu, Notify } from '@opentiny/vue'

const options = ref([
  {
    label: '老友粉1',
    icon: iconStarDisable(),
    children: [
      {
        label: '老友粉2.1',
        children: [{ label: '狮子头3.1' }]
      },
      { label: '老友粉2.2' },
      { label: '老友粉2.3', disabled: true }
    ]
  },
  {
    label: '狮子头',
    disabled: true
  },
  {
    label: '黄金糕',
    icon: iconStarDisable()
  }
])

function itemClick(data) {
  Notify({
    type: 'info',
    title: 'itemData',
    message: `配置式可以通过 data.itemData 获取配置数据：${JSON.stringify(data.itemData)}`,
    position: 'top-right',
    duration: 2000
  })
}
</script>

<style scoped>
.tiny-dropdown {
  margin-right: 20px;
}
</style>
