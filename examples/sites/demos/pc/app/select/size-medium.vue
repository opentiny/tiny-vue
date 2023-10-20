<template>
  <div class="fontStyle">medium</div>
  <tiny-select v-model="value" placeholder="请选择" size="medium" multiple :options="options"></tiny-select>
  <div class="fontStyle">small</div>
  <tiny-select v-model="value1" placeholder="请选择" size="small" multiple>
    <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
  </tiny-select>
  <div class="fontStyle">mini</div>
  <tiny-select v-model="value2" placeholder="请选择" size="mini" multiple>
    <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
  </tiny-select>
</template>

<script lang="jsx">
import { Option, Select } from '@opentiny/vue'

export default {
  components: {
    TinySelect: Select,
    TinyOption: Option
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
      value: '',
      value1: '',
      value2: ''
    }
  }
}
</script>

<style>
.fontStyle {
  font-size: 14px;
  margin: 8px;
}
</style>
