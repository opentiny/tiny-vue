<template>
  <tiny-select v-model="value">
    <template #empty>
      <div class="custom-empty">空数据插槽</div>
    </template>
  </tiny-select>
</template>

<script setup>
import { ref } from 'vue'
import { Select as TinySelect } from '@opentiny/vue'

const value = ref('')
</script>

<style lang="less" scoped>
.tiny-select {
  width: 280px;
}
.custom-empty {
  padding: 10px;
}
</style>
