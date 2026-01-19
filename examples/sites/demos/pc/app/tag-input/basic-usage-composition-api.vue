<template>
  <div class="tiny-tag-input-demo">
    <tiny-tag-input v-model="data" :placeholder="placeholder"></tiny-tag-input>
    <tiny-tag-input
      v-model="data1"
      :placeholder="placeholder"
      tag-type="info"
      tag-effect="light"
      disabled
    ></tiny-tag-input>
    <tiny-tag-input v-model="data2" :placeholder="placeholder" tag-type="success" tag-effect="plain"></tiny-tag-input>
  </div>
</template>

<script setup>
import { TinyTagInput } from '@opentiny/vue'
import { reactive, ref } from 'vue'

const data = reactive(['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6'])
const data1 = reactive(['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6'])
const data2 = reactive(['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6'])
const placeholder = ref('please enter a tag')
</script>

<style scoped>
.tiny-tag-input-demo .tiny-tag-input {
  margin-bottom: 20px;
}
</style>
