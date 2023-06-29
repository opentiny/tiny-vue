<template>
  <div>
    <tiny-button @click="onFocus" style="margin-bottom: 10px">
      点击获取焦点
    </tiny-button>
    <tiny-select v-model="value" placeholder="请选择" automatic-dropdown ref="selectDom">
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
      </tiny-option>
    </tiny-select>
  </div>
</template>

<script lang="jsx">
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
    onFocus() {
      this.$refs.selectDom.focus()
    }
  }
}
</script>
