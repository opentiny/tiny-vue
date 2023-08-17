<template>
  <div>
    <div>
      <tiny-button type="primary" @click="boxVisibility = true"> 显示提示语 </tiny-button>
      <tiny-button type="primary" style="margin-left: 20px" @click="boxVisibility2 = true"> 不显示提示语 </tiny-button>
    </div>

    <tiny-action-sheet
      title="显示提示语"
      type="action"
      :menus="menus"
      :visible="boxVisibility"
      @update:visible="boxVisibility = $event"
      @click="selectOption"
      @close="close"
    ></tiny-action-sheet>

    <tiny-action-sheet
      type="action"
      :menus="menus"
      :visible="boxVisibility2"
      @update:visible="boxVisibility2 = $event"
      @click="selectOption"
      @close="close"
    ></tiny-action-sheet>
  </div>
</template>

<script>
import { ActionSheet, Button, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyActionSheet: ActionSheet,
    TinyButton: Button
  },
  data() {
    return {
      boxVisibility: false,
      boxVisibility2: false,
      menus: ['转交', '征询', '撤回']
    }
  },
  methods: {
    selectOption(option, index) {
      Modal.message(`选择了第${index + 1}项 [${option}]`)
    },
    close() {
      Modal.message('点击取消了')
    }
  }
}
</script>
