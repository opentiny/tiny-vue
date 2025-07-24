<template>
  <tiny-base-select v-model="value" popper-class="drop" :popper-append-to-body="false" placement="top">
    <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
  </tiny-base-select>
</template>

<script>
import { TinyBaseSelect, TinyOption } from '@opentiny/vue'

export default {
  components: {
    TinyBaseSelect,
    TinyOption
  },
  data() {
    return {
      options: [
        { value: '选项 1', label: '北京' },
        { value: '选项 2', label: '上海' },
        { value: '选项 3', label: '天津' },
        { value: '选项 4', label: '重庆' },
        { value: '选项 5', label: '深圳' }
      ],
      value: ''
    }
  }
}
</script>

<style lang="less" scoped>
.tiny-base-select {
  width: 280px;
  margin-top: 30px;
}
</style>

<style>
.drop {
  background-color: #d5e8ff;
}
</style>
