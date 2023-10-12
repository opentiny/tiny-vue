<template>
  <div class="demo-input">
    <tiny-input :prefix-icon="TinyIconCalendar" v-model="value"></tiny-input>
    <tiny-input :suffix-icon="TinyIconCalendar" v-model="value"></tiny-input>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Input as TinyInput } from '@opentiny/vue'
import { iconCalendar } from '@opentiny/vue-icon'

const TinyIconCalendar = iconCalendar()
const value = ref('')
</script>

<style scoped>
.demo-input .tiny-input {
  width: 250px;
  margin: 0 5px;
}
</style>
  