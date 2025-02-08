<template>
  <div class="demo">
    <p>默认</p>
    <tiny-radio v-model="value"></tiny-radio>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyRadio } from '@opentiny/vue-mobile'

const value = ref(false)
</script>

<style>
.demo {
  height: 100%;
  overflow-y: scroll;
  padding: 20px;
}
</style>
