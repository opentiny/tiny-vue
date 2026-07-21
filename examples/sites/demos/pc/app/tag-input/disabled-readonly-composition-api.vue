<template>
  <div class="tiny-tag-input-demo">
    <span>disabled: </span><tiny-tag-input v-model="data" :placeholder="placeholder" disabled></tiny-tag-input>
    <span>readonly：</span><tiny-tag-input v-model="data1" :placeholder="placeholder" readonly></tiny-tag-input>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { TinyTagInput } from '@opentiny/vue'

const data = reactive(['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6'])
const data1 = reactive(['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6'])
</script>

<style scoped>
.tiny-tag-input-demo .tiny-tag-input {
  margin-bottom: 20px;
}
</style>
