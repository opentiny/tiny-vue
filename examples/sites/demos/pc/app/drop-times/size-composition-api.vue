<template>
  <div style="width: 270px">
    <tiny-drop-times size="medium" v-model="value" placeholder="请选择"></tiny-drop-times>
    <p>当前选中值：{{ value }}</p>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { DropTimes as TinyDropTimes } from '@opentiny/vue'

const value = ref('')
</script>
