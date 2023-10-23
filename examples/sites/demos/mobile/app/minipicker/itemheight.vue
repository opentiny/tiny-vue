<template>
  <div class="tiny-mobile-mini-picker-demo">
    <tiny-button @click="fn">cliclk me!</tiny-button>
    <tiny-mini-picker
      title="设置可见选项个数"
      :columns="columns1"
      :visible="boxVisibility"
      @update:visible="boxVisibility = $event"
      :item-height="40"
    ></tiny-mini-picker>
  </div>
</template>

<script lang="jsx">
import { MiniPicker, Button } from '@opentiny/vue'

export default {
  components: {
    TinyMiniPicker: MiniPicker,
    TinyButton: Button
  },
  data() {
    return {
      boxVisibility: false,
      columns1: ['小花', '小草', '小叶', '小树', '小星', '小月']
    }
  },
  methods: {
    fn() {
      this.boxVisibility = true
    }
  }
}
</script>
