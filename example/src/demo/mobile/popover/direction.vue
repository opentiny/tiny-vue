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

<script>
import { Popover } from '@opentiny/vue'

export default {
  data() {
    return {
      data1: [{
        id: '0',
        label: '代金券',
        icon: 'static/images/icon.png'
      }, {
        id: '1',
        label: '拜访纪要',
        icon: 'static/images/icon.png'
      }, {
        id: '2',
        label: '拜访打卡',
        icon: 'static/images/icon.png'
      }, {
        id: '3',
        label: '联系人',
        icon: 'static/images/icon.png'
      }, {
        id: '4',
        label: '报备',
        icon: 'static/images/icon.png'
      }],
      data2: [{
        id: '0',
        label: '取消收藏',
        icon: 'static/images/icon.png'
      }, {
        id: '1',
        label: '暂不关注该客户',
        subLabel: '首页“关注”将不收到该客户动态',
        icon: 'static/images/icon.png'
      }],
      data3: []
    }
  },
  mounted() {
    for (let index = 0; index < 20; index++) {
      this.data3.push({
        id: index,
        label: '内容' + index,
        icon: 'static/images/icon.png'
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
  },
}
</script>

<style lang="less" scoped>
.tiny-mobile-popover-demo {

  div {
    margin-bottom: 30px;
  }
}
</style>
