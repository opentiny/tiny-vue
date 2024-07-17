<template>
  <div>
    <p>场景1：默认不可搜索时，获取焦点不下拉</p>
    <tiny-button @click="handleFocus1"> 点击获取焦点 </tiny-button>
    <tiny-base-select v-model="value" ref="selectOnlyFocusRef">
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-base-select>
    <p>场景2：设置不可搜索时，获取焦点并自动下拉</p>
    <tiny-button @click="handleFocus2"> 点击获取焦点 </tiny-button>
    <tiny-base-select v-model="value" ref="selectAutoDropRef" automatic-dropdown>
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-base-select>
  </div>
</template>

<script>
import { BaseSelect, Option, Button } from '@opentiny/vue'

export default {
  components: {
    TinyBaseSelect: BaseSelect,
    TinyOption: Option,
    TinyButton: Button
  },
  data() {
    return {
      options: [
        { value: '选项1', label: '北京' },
        { value: '选项2', label: '上海' },
        { value: '选项3', label: '天津' },
        { value: '选项4', label: '重庆' },
        { value: '选项5', label: '深圳' }
      ],
      value: ''
    }
  },
  methods: {
    handleFocus1() {
      this.$refs.selectOnlyFocusRef.focus()
    },
    handleFocus2() {
      this.$refs.selectAutoDropRef.focus()
    }
  }
}
</script>

<style lang="less" scoped>
.tiny-base-select {
  width: 280px;
}
p {
  font-size: 14px;
  line-height: 1.5;
  padding: 16px 0;
}
.tiny-button {
  margin-right: 10px;
}
</style>
