<template>
  <div class="tiny-mobile-mini-picker-demo">
    <tiny-button @click="fn">cliclk me!</tiny-button>
    <tiny-mini-picker
      title="触发change事件"
      ref="picker"
      @confirm="getVal"
      :columns="columns1"
      :visible="boxVisibility"
      @update:visible="boxVisibility = $event"
    ></tiny-mini-picker>
  </div>
</template>

<script>
import { MiniPicker, Button } from '@opentiny/vue'

export default {
  components: {
    TinyMiniPicker: MiniPicker,
    TinyButton: Button
  },
  data() {
    return {
      optionIndex: '0',
      boxVisibility: false,
      columns1: ['小花', '小草', '小叶', '小树', '小星', '小月']
    }
  },
  methods: {
    fn() {
      this.boxVisibility = true
    },
    getVal() {
      const values = this.$refs.picker.getColumnValues(this.optionIndex)
      const value = this.$refs.picker.getColumnValue(this.optionIndex)
      const index = this.$refs.picker.getColumnIndex(this.optionIndex)
      console.log('对应列中所有选项', values)
      console.log('对应列选中的值:', value)
      console.log('对应列选中项的索引', index)
    }
  }
}
</script>
