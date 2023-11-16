<template>
  <tiny-select v-model="value" placeholder="请选择">
    <template #empty>
      <div>没有选项</div>
    </template>
  </tiny-select>
</template>

<script setup>
import { ref } from 'vue'
import { Select as TinySelect } from '@opentiny/vue'

const value = ref('')
</script>
