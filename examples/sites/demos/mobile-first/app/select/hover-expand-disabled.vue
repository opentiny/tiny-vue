<template>
  <tiny-select
    class="demo-select"
    v-model="value"
    placeholder="请选择"
    multiple
    disabled
    hover-expand
    disabled-tooltip-content="我是自定义内容"
    title="标题"
  >
    <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
  </tiny-select>
</template>

<script>
import { Select, Option } from '@opentiny/vue'

export default {
  components: {
    TinySelect: Select,
    TinyOption: Option
  },
  data() {
    return {
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面超长超长超长超长超长超长超长超长超长'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: ['选项1', '选项2', '选项3', '选项4']
    }
  }
}
</script>

<style>
.demo-select {
  width: 300px;
}
</style>
