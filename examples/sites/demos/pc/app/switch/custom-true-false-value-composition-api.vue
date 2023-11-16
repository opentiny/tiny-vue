<template>
  <div>
    <tiny-switch v-model="value" true-value="yes" false-value="no"> </tiny-switch>
    当前值:{{ value }}
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Switch as TinySwitch } from '@opentiny/vue'

const value = ref('yes')
</script>
