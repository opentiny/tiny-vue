<template>
  <div class="tiny-mobile-mini-picker-demo">
    <tiny-button @click="fn">cliclk me!</tiny-button>
    <tiny-mini-picker
      title="设置初始值索引"
      :columns="columns1"
      :visible="boxVisibility"
      @update:visible="boxVisibility = $event"
      :default-index="2"
    ></tiny-mini-picker>
  </div>
</template>

<script lang="jsx">
import { TinyMiniPicker, TinyButton } from '@opentiny/vue-mobile'

export default {
  components: {
    TinyMiniPicker,
    TinyButton
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
