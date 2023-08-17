<template>
  <tiny-checkbox v-model="checked">复选框</tiny-checkbox>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Checkbox as TinyCheckbox } from '@opentiny/vue'

const checked = ref(true)
</script>
