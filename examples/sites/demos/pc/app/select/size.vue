<template>
  <div>
    <p>默认</p>
    <tiny-select v-model="value1" multiple :options="options"></tiny-select>
    <p>medium</p>
    <tiny-select v-model="value2" size="medium" multiple :options="options"></tiny-select>
    <p>small</p>
    <tiny-select v-model="value3" size="small" multiple :options="options"> </tiny-select>
    <p>mini</p>
    <tiny-select v-model="value4" size="mini" multiple :options="options"> </tiny-select>
  </div>
</template>

<script>
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
      value1: ['选项1', '选项2'],
      value2: ['选项1', '选项2'],
      value3: ['选项1', '选项2'],
      value4: ['选项1', '选项2']
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
</style>
