<template>
  <tiny-base-select v-model="value">
    <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    <template #footer>
      <div class="select-footer">
        <tiny-button type="success" round> 底部插槽 </tiny-button>
      </div>
    </template>
  </tiny-base-select>
</template>

<script>
import { TinyBaseSelect, TinyOption, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinyButton,
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
}
.select-footer {
  text-align: center;
  background-color: #cff3e8;
  padding: 8px;
}
</style>
