<template>
  <tiny-dropdown>
    <template #dropdown>
      <tiny-dropdown-menu placement="bottom-start">
        <tiny-dropdown-item label="老友粉"></tiny-dropdown-item>
        <tiny-dropdown-item>黄金糕</tiny-dropdown-item>
        <tiny-dropdown-item>狮子头</tiny-dropdown-item>
        <tiny-dropdown-item>螺蛳粉</tiny-dropdown-item>
        <tiny-dropdown-item disabled>双皮奶</tiny-dropdown-item>
        <tiny-dropdown-item>蚵仔煎</tiny-dropdown-item>
      </tiny-dropdown-menu>
    </template>
  </tiny-dropdown>
  <br />
  <br />
  <tiny-dropdown>
    <template #dropdown>
      <tiny-dropdown-menu :options="options" placement="bottom-start"> </tiny-dropdown-menu>
    </template>
  </tiny-dropdown>
</template>

<script>
import { iconStarDisable } from '@opentiny/vue-icon'
import { TinyDropdown, TinyDropdownMenu, TinyDropdownItem } from '@opentiny/vue'

export default {
  components: {
    TinyDropdown,
    TinyDropdownMenu,
    TinyDropdownItem
  },
  data() {
    return {
      options: [
        {
          label: '老友粉 1',
          icon: iconStarDisable(),
          children: [
            {
              label: '老友粉 2.1',
              children: [{ label: '狮子头 3.1' }]
            },
            { label: '老友粉 2.2' },
            { label: '老友粉 2.3', disabled: true }
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
      ]
    }
  }
}
</script>
