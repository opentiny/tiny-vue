<template>
  <div>
    <div>
      <p>单选，值：{{ activeName1 }}</p>
      <tiny-button @click=";(ellipsis = true), (boxVisibility1 = true)">内容超出隐藏</tiny-button>
      <tiny-button @click=";(ellipsis = false), (boxVisibility1 = true)">内容超出显示</tiny-button>
    </div>
    <br />
    <div>
      <p>多选，值：{{ activeName2 }}</p>
      <tiny-button @click=";(ellipsis = true), (boxVisibility2 = true)">内容超出隐藏</tiny-button>
      <tiny-button @click=";(ellipsis = false), (boxVisibility2 = true)">内容超出显示</tiny-button>
    </div>

    <tiny-select-mobile
      v-model="activeName1"
      title="标题1"
      :ellipsis="ellipsis"
      :search-config="searchConfig"
      :show-footer="true"
      :menus="menus"
      :visible="boxVisibility1"
      @update:visible="boxVisibility1 = $event"
    ></tiny-select-mobile>
    <tiny-select-mobile
      v-model="activeName2"
      title="标题2"
      multiple
      :ellipsis="ellipsis"
      :search-config="searchConfig"
      :show-footer="true"
      :menus="menus"
      :visible="boxVisibility2"
      @update:visible="boxVisibility2 = $event"
    ></tiny-select-mobile>
  </div>
</template>

<script>
import { SelectMobile, Button } from '@opentiny/vue'

export default {
  components: {
    TinySelectMobile: SelectMobile,
    TinyButton: Button
  },
  data() {
    const list = [
      {
        id: 1,
        label: '进行中'
      },
      {
        id: 2,
        label: '未开始'
      },
      {
        id: 3,
        label: '已完成'
      },
      {
        id: 4,
        label:
          '已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期已过期'
      }
    ]

    return {
      activeName1: 1,
      activeName2: [],
      ellipsis: false,
      boxVisibility1: false,
      boxVisibility2: false,
      searchConfig: {
        options: list
      },
      menus: list
    }
  },
  methods: {}
}
</script>
