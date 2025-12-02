<template>
  <tiny-select v-model="value">
    <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    <template #dropdown>
      <div class="select-header">
        <tiny-button type="success" round> 顶部插槽 </tiny-button>
      </div>
    </template>
    <template #footer>
      <div class="select-footer">
        <tiny-button type="success" round> 底部插槽 </tiny-button>
      </div>
    </template>
  </tiny-select>
</template>

<script>
import { TinySelect, TinyOption, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinyButton,
    TinySelect,
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

<style scoped>
.tiny-select {
  width: 280px;
}
.select-footer {
  text-align: center;
  background-color: rgb(207, 243, 232, 0.3);
  padding: 8px;
}
.select-header {
  text-align: center;
  background-color: rgb(207, 243, 232, 0.3);
  padding: 8px;
}
</style>
