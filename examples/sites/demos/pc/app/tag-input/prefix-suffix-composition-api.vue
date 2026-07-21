<template>
  <div class="tiny-tag-input-demo">
    <tiny-tag-input v-model="data" :placeholder="placeholder">
      <template #prefix>
        <span>prefix:</span>
      </template>
      <template #suffix>
        <span>suffix</span>
      </template>
    </tiny-tag-input>
  </div>
</template>

<script setup>
import { TinyTagInput } from '@opentiny/vue'
import { reactive, ref } from 'vue'

const data = reactive(['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6'])
const placeholder = ref('please enter a tag')
</script>

<style scoped>
.tiny-tag-input-demo .tiny-tag-input {
  margin-bottom: 20px;
}
</style>
