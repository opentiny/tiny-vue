<template>
  <div class="tiny-mobile-dropdown-menu-demo">
    <tiny-dropdown-menu :close-on-click-overlay="false">
      <tiny-dropdown-item
        v-model="value2"
        :options="option2"
      ></tiny-dropdown-item>
      <tiny-dropdown-item
        v-model="value3"
        title="发布时间"
        type="sort"
      ></tiny-dropdown-item>
      <tiny-dropdown-item
        v-model="value4"
        :options="options4"
        title="筛选"
        type="filter"
      ></tiny-dropdown-item>
    </tiny-dropdown-menu>
  </div>
</template>

<script>
import { DropdownMenu, DropdownItem } from '@opentiny/vue'

export default {
  components: {
    TinyDropdownMenu: DropdownMenu,
    TinyDropdownItem: DropdownItem
  },
  data() {
    return {
      value1: 0,
      value2: 'a',
      value3: '',
      value4: [[1, 2], [], []],
      activeColor: 'violet',
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      option2: [
        { text: '默认排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' }
      ],
      options4: [
        {
          title: '性别',
          data: [
            { value: 1, text: '女' },
            { value: 2, text: '男' }
          ]
        },
        {
          title: '店铺类型',
          data: [
            { value: '1', text: '旗舰店' },
            { value: 2, text: '专卖店' },
            { value: 3, text: '专营店' }
          ]
        },
        {
          title: '商品类型',
          data: [
            { value: '1', text: '通用排序' },
            { value: 2, text: '天猫直送' },
            { value: 3, text: '公益宝贝' }
          ]
        }
      ]
    }
  }
}
</script>
