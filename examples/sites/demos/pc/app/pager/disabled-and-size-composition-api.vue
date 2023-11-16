<template>
  <div class="content">
    是否禁用：<tiny-switch v-model="isDisabled"></tiny-switch>
    <tiny-pager mode="number" :total="100" :disabled="isDisabled" />
    <tiny-pager mode="number" :total="100" size="mini" :disabled="isDisabled" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Pager as TinyPager, Switch as TinySwitch } from '@opentiny/vue'

const isDisabled = ref(false)
</script>

<style scoped>
.content {
  margin-bottom: 20px;
}
</style>
