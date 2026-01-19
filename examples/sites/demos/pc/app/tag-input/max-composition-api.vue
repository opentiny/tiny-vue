<template>
  <div class="tiny-tag-input-demo">
    <tiny-tag-input v-model="data" :placeholder="placeholder" :max="max"></tiny-tag-input>
  </div>
</template>

<script setup>
import { TinyTagInput } from '@opentiny/vue'
import { reactive } from 'vue'

const data = reactive(['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6'])
const max = 5
const placeholder = 'please enter a tag'
</script>

<style scoped>
.tiny-tag-input-demo .tiny-tag-input {
  margin-bottom: 20px;
}
</style>
