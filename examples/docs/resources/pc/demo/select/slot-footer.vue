<template>
  <tiny-select v-model="value" placeholder="请选择">
    <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
    </tiny-option>
    <template #footer>
      <div class="select-footer">
        <tiny-button type="success" round>
          底部插槽
        </tiny-button>
      </div>
    </template>
  </tiny-select>
</template>

<script lang="jsx">
import { Select, Option, Button } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button,
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
      value: ''
    }
  }
}
</script>

<style scoped>
.select-footer {
  text-align: center;
  background-color: #cff3e8;
  padding: 8px;
}
</style>
