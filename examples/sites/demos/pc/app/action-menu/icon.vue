<template>
  <div>
    <p>场景 1：显示图标</p>
    <tiny-action-menu
      class="custom-icon"
      :options="options"
      :suffix-icon="tinyIconEllipsis"
      more-text=""
      spacing="8px"
      :max-show-num="3"
    >
    </tiny-action-menu>
    <p>场景 2：只显示文本</p>
    <tiny-action-menu :options="options1" :show-icon="false" :max-show-num="3"> </tiny-action-menu>
  </div>
</template>

<script>
import { TinyActionMenu } from '@opentiny/vue'
import { iconWebPlus, iconSuccessful, iconShutdown, iconEllipsis } from '@opentiny/vue-icon'

export default {
  components: {
    TinyActionMenu
  },
  data() {
    return {
      options: [
        {
          label: '远程登陆',
          icon: iconWebPlus()
        },
        {
          label: '开机',
          icon: iconSuccessful()
        },
        {
          label: '关机',
          icon: iconShutdown()
        },
        {
          label: '重启'
        },
        {
          label: '网络设置',
          children: [{ label: '更改安全组' }, { label: '切换 VPC' }]
        }
      ],
      options1: [
        {
          label: '远程登陆'
        },
        {
          label: '开机'
        },
        {
          label: '关机'
        },
        {
          label: '重启'
        },
        {
          label: '网络设置',
          children: [{ label: '更改安全组' }, { label: '切换 VPC', divided: true }]
        }
      ],
      tinyIconEllipsis: iconEllipsis()
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

.custom-icon.tiny-action-menu {
  :deep(.tiny-action-menu__wrap) {
    .tiny-action-menu__item {
      .tiny-dropdown-item__wrap {
        color: var(--tv-color-icon-control);
        .tiny-svg {
          fill: var(--tv-color-icon-control);
        }
      }

      &:hover {
        .tiny-dropdown-item__wrap > .tiny-dropdown-item__content .tiny-svg {
          fill: var(--tv-color-icon-control);
        }
      }

      .tiny-dropdown {
        color: var(--tv-color-icon-control);
        .tiny-svg {
          fill: var(--tv-color-icon-control);
        }
      }
    }
  }
}
</style>
