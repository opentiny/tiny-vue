<template>
  <div class="tiny-mobile-dropdown-menu-demo">
    <tiny-dropdown-menu>
      <tiny-dropdown-item v-model="value2" :options="option2" disabled></tiny-dropdown-item>
      <tiny-dropdown-item v-model="value3" title="发布时间" type="sort"></tiny-dropdown-item>
      <tiny-dropdown-item v-model="value4" :options="options4" title="筛选" type="filter"></tiny-dropdown-item>
    </tiny-dropdown-menu>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyDropdownMenu, TinyDropdownItem } from '@opentiny/vue-mobile'

const value1 = ref(0)
const value2 = ref('a')
const value3 = ref('')
const value4 = ref([[1, 2], [], []])
const activeColor = ref('violet')
const option1 = ref([
  { text: '全部商品', value: 0 },
  { text: '新款商品', value: 1 },
  { text: '活动商品', value: 2 }
])
const option2 = ref([
  { text: '默认排序', value: 'a' },
  { text: '好评排序', value: 'b' },
  { text: '销量排序', value: 'c' }
])
const options4 = ref([
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
])
</script>
