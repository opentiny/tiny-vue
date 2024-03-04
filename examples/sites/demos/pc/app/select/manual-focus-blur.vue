<template>
  <div>
    <div class="demo1">
      <div>场景1：默认 focus() 后仅聚焦，不下拉</div>
      <br />
      <tiny-button @click="handleFocus1"> 点击获取焦点 </tiny-button>
      <tiny-button @click="handleBlur1"> 点击失去焦点 </tiny-button>
      <br />
      <tiny-select v-model="value" ref="drop1">
        <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
      </tiny-select>
    </div>
    <br />
    <div class="demo2">
      <div>场景2：配置 filterable，focus() 后聚焦并自动下拉</div>
      <br />
      <tiny-button @click="handleFocus2"> 点击获取焦点 </tiny-button>
      <tiny-button @click="handleBlur2"> 点击失去焦点 </tiny-button>
      <br />
      <tiny-select v-model="value" ref="drop2" filterable>
        <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
      </tiny-select>
    </div>
    <br />
    <div class="demo3">
      <div>场景2：配置 automaticDropdown，focus() 后聚焦并自动下拉</div>
      <br />
      <tiny-button @click="handleFocus3"> 点击获取焦点 </tiny-button>
      <tiny-button @click="handleBlur3"> 点击失去焦点 </tiny-button>
      <br />
      <tiny-select v-model="value" ref="drop3" automatic-dropdown>
        <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
      </tiny-select>
    </div>
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
      this.$refs.drop1.focus()
    },
    handleBlur1() {
      this.$refs.drop1.blur()
    },
    handleFocus2() {
      this.$refs.drop2.focus()
    },
    handleBlur2() {
      this.$refs.drop2.blur()
    },
    handleFocus3() {
      this.$refs.drop3.focus()
    },
    handleBlur3() {
      this.$refs.drop3.blur()
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
</style>
