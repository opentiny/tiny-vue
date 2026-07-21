<template>
  <div>
    <p>场景 1：配置式配置映射字段</p>
    <tiny-base-select v-model="value1" multiple :options="options" value-field="val" text-field="text">
    </tiny-base-select>
  </div>
</template>

<script>
import { TinyBaseSelect } from '@opentiny/vue'

export default {
  components: {
    TinyBaseSelect
  },
  data() {
    return {
      value1: ['选项 1', '选项 2'],
      options: [
        { val: '选项 1', text: '北京' },
        { val: '选项 2', text: '上海' },
        { val: '选项 3', text: '天津' },
        { val: '选项 4', text: '重庆' },
        { val: '选项 5', text: '深圳' },
        { val: '选项 6', text: '南京' },
        { val: '选项 7', text: '成都' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
[data-tag='tiny-base-select'] {
  width: 280px;
}
p {
  font-size: 14px;
  line-height: 1.5;
  padding: 16px 0;
}
</style>
