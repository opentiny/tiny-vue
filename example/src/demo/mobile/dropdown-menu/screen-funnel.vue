<template>
  <div class="dropdownMenu">
    <div class="page__hd">
      <h1 class="page__title">DrowdownMenu</h1>
      <p class="page__desc">筛选漏斗</p>
    </div>
    <div class="tiny-mobile-dropdown-menu-demo">
      <tiny-dropdown-menu :overlay="false">
        <tiny-dropdown-item v-model="value1" :options="option2"></tiny-dropdown-item>
        <tiny-dropdown-item v-model="value3" title="发布时间" type="sort"></tiny-dropdown-item>
        <tiny-dropdown-item v-model="value2" :options="option2"></tiny-dropdown-item>
        <tiny-dropdown-item v-model="value4" :options="options4" title="筛选" type="filter"></tiny-dropdown-item>
      </tiny-dropdown-menu>
    </div>
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
      value1: '0',
      value2: '2',
      value3: '',
      value4: [[1, 0], [1], [3]],
      activeColor: 'violet',
      option2: [
        { text: '审批中', value: '0' },
        { text: '被驳回', value: '1' },
        { text: '完成', value: '2' },
        { text: '求助', value: '3' },
        { text: '讨论', value: '4' }
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
            { value: 1, text: '旗舰店' },
            { value: 2, text: '专卖店' },
            { value: 3, text: '专营店' }
          ]
        },
        {
          title: '商品类型',
          data: [
            { value: 1, text: '通用排序' },
            { value: 2, text: '天猫直送' },
            { value: 3, text: '公益宝贝' }
          ]
        }
      ]
    }
  }
}
</script>
<style>
.dropdownMenu {
  width: 356px;
  height: calc(100% - 0px);
  overflow: auto;
}
.page__hd {
  padding: 40px;
}
.page__title {
  font-weight: 400;
  font-size: 21px;
  text-align: left;
}
.page__desc {
  margin-top: 5px;
  color: #888;
  font-size: 14px;
  text-align: left;
}
</style>
