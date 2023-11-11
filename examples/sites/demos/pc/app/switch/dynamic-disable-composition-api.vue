<template>
  <div class="switch-demo">
    <tiny-switch v-model="value1" disabled></tiny-switch>
    <tiny-switch v-model="value2" disabled></tiny-switch>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Switch as TinySwitch } from '@opentiny/vue'

const value1 = ref(true)
const value2 = ref(false)
</script>
<style scoped>
.switch-demo .tiny-switch + .tiny-switch {
  margin-left: 20px;
}
</style>
