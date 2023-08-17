<template>
  <tiny-button-group :data="groupData"></tiny-button-group>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { ButtonGroup as TinyButtonGroup } from '@opentiny/vue'

const groupData = ref([
  { text: 'Button1', value: 1 },
  { text: 'Button2', value: 2 },
  { text: 'Button3', value: 3 }
])
</script>
