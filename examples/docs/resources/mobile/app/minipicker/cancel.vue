<template>
  <div class="tiny-mobile-mini-picker-demo">
    <tiny-button @click="fn">cliclk me!</tiny-button>
    <tiny-mini-picker
      title="触发change事件"
      :columns="columns1"
      :visible="boxVisibility"
      @update:visible="boxVisibility = $event"
      @cancel="Ecancel"
      @confirm="Econfirm"
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
    },
    Ecancel() {
      console.log('取消')
    },
    Econfirm() {
      console.log('确定')
    }
  }
}
</script>
