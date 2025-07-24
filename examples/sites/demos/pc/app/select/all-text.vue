<template>
  <div>
    <div style="margin: 16px 0">全选后，显示多个 tag</div>
    <tiny-select v-model="value" multiple all-text="全部小吃">
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>

    <div style="margin: 16px 0">全选后，显示自定义的全部 Tag</div>
    <tiny-select v-model="value1" multiple all-text="全部小吃" show-all-text-tag>
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
  </div>
</template>

<script>
import { TinySelect, TinyOption } from '@opentiny/vue'

export default {
  components: {
    TinySelect,
    TinyOption
  },
  data() {
    return {
      value: [],
      value1: [],
      options: [
        { value: '选项 1', label: '黄金糕' },
        { value: '选项 2', label: '双皮奶' },
        { value: '选项 3', label: '蚵仔煎' },
        { value: '选项 4', label: '龙须面' },
        { value: '选项 6', label: '螺蛳粉' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.tiny-select {
  width: 280px;
}
</style>
