<template>
  <div class="switch-demo">
    <tiny-switch v-model="value1" show-text></tiny-switch>
    <tiny-switch v-model="value2" show-text>
      <template #open>
        <span>是</span>
      </template>
      <template #close>
        <span>否</span>
      </template>
    </tiny-switch>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Switch as TinySwitch } from '@opentiny/vue'

const value1 = ref(false)
const value2 = ref(false)
</script>
<style scoped>
.switch-demo .tiny-switch + .tiny-switch {
  margin-left: 20px;
}
</style>
