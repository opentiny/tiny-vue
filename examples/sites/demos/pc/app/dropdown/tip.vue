<template>
  <div>
    <p>场景1：配置式设置提示信息</p>
    <tiny-dropdown>
      <template #dropdown>
        <tiny-dropdown-menu :options="options"> </tiny-dropdown-menu>
      </template>
    </tiny-dropdown>
    <p>场景2：使用 tip 和 tip-position 属性设置提示信息</p>
    <tiny-dropdown>
      <template #dropdown>
        <tiny-dropdown-menu popper-class="my-class">
          <tiny-dropdown-item label="老友粉" tip="老友粉"></tiny-dropdown-item>
          <tiny-dropdown-item tip="黄金糕" tip-position="top">黄金糕</tiny-dropdown-item>
          <tiny-dropdown-item>狮子头</tiny-dropdown-item>
          <tiny-dropdown-item>螺蛳粉</tiny-dropdown-item>
          <tiny-dropdown-item disabled>双皮奶</tiny-dropdown-item>
          <tiny-dropdown-item>蚵仔煎</tiny-dropdown-item>
        </tiny-dropdown-menu>
      </template>
    </tiny-dropdown>
  </div>
</template>

<script>
import { iconStarDisable } from '@opentiny/vue-icon'
import { Dropdown, DropdownMenu, DropdownItem, Notify } from '@opentiny/vue'

export default {
  components: {
    TinyDropdown: Dropdown,
    TinyDropdownMenu: DropdownMenu,
    TinyDropdownItem: DropdownItem
  },
  data() {
    return {
      options: [
        {
          label: '老友粉',
          disabled: true
        },
        {
          label: '狮子头',
          divided: true,
          tip: '很好',
          tipPosition: 'left'
        },
        {
          label: '黄金糕',
          divided: true,
          tip: () => {
            return '支持函数'
          },
          icon: iconStarDisable()
        }
      ]
    }
  },
  methods: {
    itemClick(data) {
      Notify({
        type: 'info',
        title: 'itemData',
        message: `配置式可以通过data.itemData获取配置数据：${JSON.stringify(data.itemData)}`,
        position: 'top-right',
        duration: 2000
      })
    }
  }
}
</script>

<style lang="less" scoped>
p {
  font-size: 14px;
  line-height: 1.5;
}
</style>
