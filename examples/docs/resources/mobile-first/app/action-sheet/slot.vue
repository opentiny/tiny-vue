<template>
  <div>
    <span>
      <tiny-button @click="boxVisibility3 = true">头部左侧插槽</tiny-button>
      <tiny-action-sheet v-model="activeName" title="标题1" :menus="menus" :visible="boxVisibility3" @update:visible="boxVisibility3 = $event">
        <template #header-left>
          <div @click="activeName = ''">清空</div>
        </template>
      </tiny-action-sheet>
    </span>
    <span>
      <tiny-button @click="boxVisibility4 = true">头部右侧插槽</tiny-button>
      <tiny-action-sheet ref="actionSheet4" v-model="activeName" title="标题1" :menus="menus" :visible="boxVisibility4" @update:visible="boxVisibility4 = $event">
        <template #header-right>
          <div @click="$refs.actionSheet4.close()">自定义关闭</div>
        </template>
      </tiny-action-sheet>
    </span>
    <span>
      <tiny-button @click="boxVisibility5 = true">内容插槽</tiny-button>
      <tiny-action-sheet v-model="activeName" title="标题1" :menus="menus" :visible="boxVisibility5" @update:visible="boxVisibility5 = $event">
        <div class="text-center">
          <div>选项1</div>
          <div>选项2</div>
          <div>选项3</div>
          <div>选项4</div>
        </div>
      </tiny-action-sheet>
    </span>
    <span>
      <tiny-button @click="boxVisibility6 = true">底部插槽</tiny-button>
      <tiny-action-sheet v-model="activeName" title="标题1" :show-footer="true" :menus="menus" :visible="boxVisibility6" @update:visible="boxVisibility6 = $event">
        <template #footer>
          <tiny-button>自定义按钮1</tiny-button> &nbsp;&nbsp; <tiny-button>自定义按钮2</tiny-button>
        </template>
      </tiny-action-sheet>
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
  methods: {
  }
}
</script>
