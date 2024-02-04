<template>
  <tiny-select v-model="value" placeholder="请选择" title="标题">
    <template #empty>
      <div class="empty-content">没有选项</div>
    </template>
  </tiny-select>
</template>

<script>
import { Select } from '@opentiny/vue'

export default {
  components: {
    TinySelect: Select
  },
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style scoped>
.empty-content {
  padding: 0.75rem;
}
</style>
