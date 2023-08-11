<template>
  <div class="demo-input">
    <tiny-input :prefix-icon="IconCalendar" v-model="value"></tiny-input>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Input as TinyInput } from '@opentiny/vue'
import { iconCalendar } from '@opentiny/vue-icon'

const IconCalendar = iconCalendar()
const value = ref('')
</script>

<style scoped>
.demo-input .tiny-input {
  width: 250px;
}
</style>
