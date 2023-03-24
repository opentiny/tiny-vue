<template>
  <div class="tiny-mobile-action-sheet-demo">
    <tiny-button _mode="mobile" @click="fn">cliclk me!</tiny-button>
    <tiny-action-sheet
      _mode="mobile"
      v-model="activeName"
      :menus="menus"
      ellipsis
      :visible="boxVisibility"
      @update:visible="boxVisibility = $event"
    ></tiny-action-sheet>
  </div>
</template>

<script lang="jsx">
import { ActionSheet, Button } from '@opentiny/vue'

export default {
  components: {
    TinyActionSheet: ActionSheet,
    TinyButton: Button
  },
  data() {
    return {
      activeName: '',
      boxVisibility: false,
      menus: [
        {
          id: 1,
          label: '我是小花,我是小花,我是小花,我是小花,我是小花,我是小花,我是小花'
        },
        {
          id: 2,
          label: '我是小树'
        },
        {
          id: 3,
          label: '我是小草'
        },
        {
          id: 4,
          label: '我是小叶',
          warn: true
        }
      ]
    }
  },
  methods: {
    fn() {
      this.boxVisibility = true
    }
  }
}
</script>
