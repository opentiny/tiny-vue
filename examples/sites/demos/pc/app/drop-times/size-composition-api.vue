<template>
  <div class="drop-time-demo-size">
    <tiny-drop-times size="medium" v-model="value" placeholder="尺寸：medium"></tiny-drop-times>
    <tiny-drop-times size="small" v-model="value" placeholder="尺寸：small"></tiny-drop-times>
    <tiny-drop-times size="mini" v-model="value" placeholder="尺寸：mini"></tiny-drop-times>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DropTimes as TinyDropTimes } from '@opentiny/vue'

const value = ref('')
</script>

<style lang="less" scoped>
.drop-time-demo-size {
  width: 270px;
  & > * {
    margin-top: 12px;
  }
}
</style>
