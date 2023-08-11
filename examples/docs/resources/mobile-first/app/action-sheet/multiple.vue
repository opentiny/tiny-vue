<template>
  <div>
    <div>
      <tiny-button @click="boxVisibility1 = true"> 单选 </tiny-button>
      <p>值：{{ activeName1 }}</p>
    </div>
    <br />
    <div>
      <tiny-button @click="boxVisibility2 = true"> 多选 </tiny-button>
      <p>值：{{ activeName2 }}</p>
    </div>

    <tiny-action-sheet
      v-model="activeName1"
      title="标题1"
      :search-config="searchConfig"
      :menus="menus"
      :visible="boxVisibility1"
      @update:visible="boxVisibility1 = $event"
    ></tiny-action-sheet>
    <tiny-action-sheet
      v-model="activeName2"
      title="标题2"
      multiple
      :search-config="searchConfig"
      :show-footer="true"
      :menus="menus"
      :visible="boxVisibility2"
      @update:visible="boxVisibility2 = $event"
    ></tiny-action-sheet>
  </div>
</template>

<script>
import { ActionSheet, Button } from '@opentiny/vue'

export default {
  components: {
    TinyActionSheet: ActionSheet,
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
