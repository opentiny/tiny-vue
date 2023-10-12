<template>
  <tiny-button @click="add">增加</tiny-button>
  <tiny-progress
    class="circle-progress"
    type="circle"
    :percentage="value"
    status="exception"
    :width="150"
  ></tiny-progress>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Progress as TinyProgress, Button as TinyButton } from '@opentiny/vue'

const value = ref(10)

function add() {
  value.value += 10
}
</script>

<style scoped>
.circle-progress {
  margin-right: 20px;
}
</style>
