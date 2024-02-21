<template>
  <div class="tiny-moible-popover-demo">
    <div>
      <tiny-popover placement="bottom" title="" width="auto" :listData="data1" @item-click="itemClick">
        <template #reference>
          <button>单行文字</button>
        </template>
      </tiny-popover>
    </div>
    <div>
      <tiny-popover placement="bottom" title="" width="auto" :listData="data2" @item-click="itemClick">
        <template #reference>
          <button>双行文字</button>
        </template>
      </tiny-popover>
    </div>
    <div>
      <tiny-popover placement="bottom" title="" width="auto" maxHeight="300" :listData="data3" @item-click="itemClick">
        <template #reference>
          <button>多数据</button>
        </template>
      </tiny-popover>
    </div>
    <div>
      <tiny-popover placement="bottom" title="" width="auto" maxHeight="300">
        <template #reference>
          <button>自定义</button>
        </template>
        <slot>
          <img :src="`${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/dog3.png`" /> 这是自定义插槽使用
        </slot>
      </tiny-popover>
    </div>
  </div>
</template>

<script lang="jsx">
import { Popover } from '@opentiny/vue'

export default {
  data() {
    return {
      data1: [
        {
          id: '0',
          label: '代金券',
          icon: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/icon.png`
        },
        {
          id: '1',
          label: '拜访纪要',
          icon: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/icon.png`
        },
        {
          id: '2',
          label: '拜访打卡',
          icon: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/icon.png`
        },
        {
          id: '3',
          label: '联系人',
          icon: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/icon.png`
        },
        {
          id: '4',
          label: '报备',
          icon: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/icon.png`
        }
      ],
      data2: [
        {
          id: '0',
          label: '取消收藏',
          icon: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/icon.png`
        },
        {
          id: '1',
          label: '暂不关注该客户',
          subLabel: '首页“关注”将不收到该客户动态',
          icon: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/icon.png`
        }
      ],
      data3: []
    }
  },
  mounted() {
    for (let index = 0; index < 20; index++) {
      this.data3.push({
        id: index,
        label: '内容' + index,
        icon: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/icon.png`
      })
    }
  },
  components: {
    TinyPopover: Popover
  },
  methods: {
    itemClick(item) {
      alert(item.label)
    }
  }
}
</script>

<style lang="less" scoped>
.tiny-moible-popover-demo {
  div {
    margin-bottom: 30px;
  }
}
</style>
