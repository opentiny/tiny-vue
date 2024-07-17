<template>
  <div>
    <p>默认</p>
    <tiny-base-select v-model="value1" multiple :options="options"></tiny-base-select>
    <p>medium</p>
    <tiny-base-select v-model="value2" size="medium" multiple :options="options"></tiny-base-select>
    <p>small</p>
    <tiny-base-select v-model="value3" size="small" multiple :options="options"> </tiny-base-select>
    <p>mini</p>
    <tiny-base-select v-model="value4" size="mini" multiple :options="options"> </tiny-base-select>
  </div>
</template>

<script>
import { BaseSelect } from '@opentiny/vue'

export default {
  components: {
    TinyBaseSelect: BaseSelect
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
      value1: ['选项1', '选项2'],
      value2: ['选项1', '选项2'],
      value3: ['选项1', '选项2'],
      value4: ['选项1', '选项2']
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
</style>
