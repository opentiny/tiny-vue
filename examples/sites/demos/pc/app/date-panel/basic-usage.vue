<template>
  <div class="demo-date-panel-wrap">
    <div>{{ value }}</div>
    <tiny-date-panel v-model="value"></tiny-date-panel>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyDatePanel } from '@opentiny/vue'


const value = ref('')
</script>

<style scoped lang="less">
.demo-date-panel-wrap {
  width: 560px;

  & > * {
    margin-top: 12px;
  }
}
</style>
