<template>
  <div class="tiny-mobile-mini-picker-demo">
    <tiny-button @click="fn">cliclk me!</tiny-button>
    <tiny-mini-picker
      title="设置初始值索引"
      ref="picker"
      @change="change"
      :columns="columns1"
      :visible="boxVisibility"
      @update:visible="boxVisibility = $event"
      :default-index="2"
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
      boxVisibility: false,
      columns1: ['小花', '小草', '小叶', '小树', '小星', '小月']
    }
  },
  methods: {
    change() {
      let indexes = this.$refs.picker.getIndexes()
      let values = this.$refs.picker.getValues()
      console.log(indexes, values)
    },
    fn() {
      this.boxVisibility = true
    }
  }
}
</script>
