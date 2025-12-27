<template>
  <tiny-tag-input v-model="data"></tiny-tag-input>
  <tiny-tag-input v-model="data1" :placeholder="placeholder" tag-type="info" tag-effect="dark"></tiny-tag-input>
  <tiny-tag-input v-model="data2" :placeholder="placeholder" tag-type="warning" tag-effect="plain"></tiny-tag-input>
</template>

<script setup>
import { TinyTagInput } from '@opentiny/vue'
import { reactive } from 'vue'

const data = reactive(['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6'])
const data1 = reactive(['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6'])
const data2 = reactive(['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6'])
const placeholder = 'please enter a tag'
</script>
