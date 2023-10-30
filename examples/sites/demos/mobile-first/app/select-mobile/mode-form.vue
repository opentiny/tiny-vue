<template>
  <div>
    <tiny-select-mobile
      v-model="activeName"
      :menus="menus"
      :search-config="searchConfig"
      mode="form"
      title="标题"
      :visible="boxVisibility"
      @update:visible="boxVisibility = $event"
    ></tiny-select-mobile>
  </div>
</template>

<script>
import { SelectMobile } from '@opentiny/vue'

export default {
  components: {
    TinySelectMobile: SelectMobile
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
        label: '已过期已过期已过期已过期已过期已过期已过期'
      }
    ]

    return {
      activeName: 1,
      boxVisibility: false,
      menus: list,
      searchConfig: {
        options: list
      }
    }
  }
}
</script>
