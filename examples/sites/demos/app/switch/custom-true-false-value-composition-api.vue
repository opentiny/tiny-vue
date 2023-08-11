<template>
  <div>
    <tiny-switch v-model="value" true-value="yes" false-value="no" show-text>
      <template #open>
        <span>是</span>
      </template>
      <template #close>
        <span style="position: relative">否</span>
      </template>
    </tiny-switch>
    当前值:{{ value }}
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Switch } from '@opentiny/vue'

const value = ref('yes')
const TinySwitch = Switch
</script>
