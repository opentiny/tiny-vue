<template>
  <div class="tiny-mobile-popover-demo">
    <div>
      <tiny-popover placement="left" title="" width="auto" :listData="data1" @itemClick="itemClick">
        <template #reference>
          <button>左</button>
        </template>
      </tiny-popover>
    </div>
    <div>
      <tiny-popover placement="right" title="" width="auto" :listData="data2" @itemClick="itemClick">
        <template #reference>
          <button>右</button>
        </template>
      </tiny-popover>
    </div>
    <div>
      <tiny-popover placement="bottom" title="" width="auto" maxHeight="200" :listData="data3" @item-click="itemClick">
        <template #reference>
          <button>下</button>
        </template>
      </tiny-popover>
    </div>
    <div>
      <tiny-popover placement="top" title="" width="auto" maxHeight="200" :listData="data3" @item-click="itemClick">
        <template #reference>
          <button>上</button>
        </template>
      </tiny-popover>
    </div>
  </div>
</template>

<script setup lang="jsx">
import { ref, onMounted } from 'vue'
import { TinyPopover } from '@opentiny/vue-mobile'

const data1 = ref([
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
])
const data2 = ref([
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
])
const data3 = ref([])

onMounted(() => {
  for (let index = 0; index < 20; index++) {
    data3.value.push({
      id: index,
      label: '内容' + index,
      icon: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/icon.png`
    })
  }
})

function itemClick(item) {
  alert(item.label)
}
</script>

<style lang="less" scoped>
.tiny-mobile-popover-demo {
  div {
    margin-bottom: 30px;
  }
}
</style>
