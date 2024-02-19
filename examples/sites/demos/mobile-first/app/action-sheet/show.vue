<template>
  <div>
    <span>
      <tiny-button @click="boxVisibility4 = true">默认属性配置</tiny-button>
      <tiny-action-sheet
        v-model="activeName"
        :menus="menus"
        :visible="boxVisibility4"
        @update:visible="boxVisibility4 = $event"
      ></tiny-action-sheet>
    </span>
    <span>
      <tiny-button @click="boxVisibility1 = true">隐藏头部</tiny-button>
      <tiny-action-sheet
        v-model="activeName"
        title="标题1"
        :show-header="false"
        :menus="menus"
        :visible="boxVisibility1"
        @update:visible="boxVisibility1 = $event"
      ></tiny-action-sheet>
    </span>
    <span>
      <tiny-button @click="boxVisibility2 = true">显示底部</tiny-button>
      <tiny-action-sheet
        v-model="activeName"
        title="标题1"
        :show-footer="true"
        :menus="menus"
        :visible="boxVisibility2"
        @update:visible="boxVisibility2 = $event"
      ></tiny-action-sheet>
    </span>
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
    return {
      activeName: 1,
      boxVisibility1: false,
      boxVisibility2: false,
      boxVisibility3: false,
      boxVisibility4: false,
      boxVisibility5: false,
      boxVisibility6: false,
      menus: [
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
    }
  },
  methods: {}
}
</script>
