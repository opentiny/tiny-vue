<template>
  <div>
    <p>场景1：默认不可搜索时，获取焦点不下拉</p>
    <tiny-button @click="handleFocus1"> 点击获取焦点 </tiny-button>
    <tiny-select v-model="value" ref="selectOnlyFocusRef">
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
    <p>场景2：设置不可搜索时，获取焦点并自动下拉</p>
    <tiny-button @click="handleFocus2"> 点击获取焦点 </tiny-button>
    <tiny-select v-model="value" ref="selectAutoDropRef" automatic-dropdown>
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
  </div>
</template>

<script>
import { Select, Option, Button } from '@opentiny/vue'

export default {
  components: {
    TinySelect: Select,
    TinyOption: Option,
    TinyButton: Button
  },
  data() {
    return {
      options: [
        { value: '选项1', label: '黄金糕' },
        { value: '选项2', label: '双皮奶' },
        { value: '选项3', label: '蚵仔煎' },
        { value: '选项4', label: '龙须面' },
        { value: '选项5', label: '北京烤鸭' }
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
.tiny-select {
  width: 280px;
}
p {
  font-size: 14px;
  line-height: 1.5;
}
.tiny-button {
  margin-bottom: 10px;
}
</style>
