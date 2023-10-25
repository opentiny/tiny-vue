<template>
  <div>
    <p class="font-style">默认不显示空数据图片</p>
    <tiny-select v-model="value" placeholder="请选择" no-data-text="None">
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>

    <p class="font-style">显示空数据图片</p>
    <tiny-select v-model="value" placeholder="请选择" no-data-text="暂无数据" :show-empty-image="true">
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
  </div>
</template>

<script lang="jsx">
import { Select, Option } from '@opentiny/vue'

export default {
  components: {
    TinySelect: Select,
    TinyOption: Option
  },
  data() {
    return {
      options: [],
      value: ''
    }
  }
}
</script>

<style scoped>
.font-style {
  font-size: 14px;
  margin: 8px;
}
</style>
