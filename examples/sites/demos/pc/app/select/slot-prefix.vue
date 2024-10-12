<template>
  <tiny-select v-model="value" multiple collapse-tags>
    <template #prefix>
      <tiny-icon-location></tiny-icon-location>
    </template>
    <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
  </tiny-select>
</template>

<script>
import { Select, Option } from '@opentiny/vue'
import { iconLocation } from '@opentiny/vue-icon'

export default {
  components: {
    TinySelect: Select,
    TinyOption: Option,
    TinyIconLocation: iconLocation()
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
      value: ''
    }
  }
}
</script>

<style lang="less" scoped>
.tiny-select {
  width: 280px;
}
</style>
