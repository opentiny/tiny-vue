<template>
  <div class="tiny-tag-input-demo">
    <tiny-tag-input v-model="data" draggable></tiny-tag-input>
  </div>
</template>

<script setup>
import { TinyTagInput } from '@opentiny/vue'
import { reactive } from 'vue'

const data = reactive(['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6'])
</script>
