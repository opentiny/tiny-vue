<template>
  <div>
    <div>
      <p>单选，值：{{ activeName1 }}</p>
      <tiny-button @click="boxVisibility1 = true">远程搜索</tiny-button>
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
  </div>
</template>

<script>
import { SelectMobile, Button } from '@opentiny/vue'

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

export default {
  components: {
    TinySelectMobile: SelectMobile,
    TinyButton: Button
  },
  data() {
    return {
      activeName1: 1,
      activeName2: [],
      ellipsis: false,
      boxVisibility1: false,
      boxVisibility2: false,
      searchConfig: {
        options: list,
        searchMethod: this.searchMethod
      },
      menus: list
    }
  },
  methods: {
    searchMethod(param) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(list.filter((item) => item.label.indexOf(param.input) > -1))
        }, 1000)
      })
    }
  }
}
</script>
