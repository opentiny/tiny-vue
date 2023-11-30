<template>
  <div>
    <tiny-button @click="handleFocus"> 点击获取焦点 </tiny-button>
    <tiny-button @click="handleBlur"> 点击失去焦点 </tiny-button>
    <tiny-select v-model="value" ref="drop" filterable>
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
    handleFocus() {
      this.$refs.drop.focus()
    },
    handleBlur() {
      this.$refs.drop.blur()
    }
  }
}
</script>

<style lang="less" scoped>
.tiny-select {
  width: 280px;
}
.tiny-button {
  max-width: unset;
  margin-bottom: 10px;
}
p {
  font-size: 14px;
  line-height: 1.5;
}
</style>
