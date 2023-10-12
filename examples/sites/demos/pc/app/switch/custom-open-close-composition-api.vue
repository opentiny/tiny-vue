<template>
  <tiny-switch v-model="value" show-text>
    <template #open>
      <span>是</span>
    </template>
    <template #close>
      <span>否</span>
    </template>
  </tiny-switch>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Switch } from '@opentiny/vue'

const value = ref(false)
const TinySwitch = Switch
</script>
