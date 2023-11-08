<template>
  <tiny-checkbox v-model="checked" name="tiny-checkbox">复选框</tiny-checkbox>
</template>

<script setup>
import { ref } from 'vue'
import { Checkbox as TinyCheckbox } from '@opentiny/vue'

const checked = ref(true)
</script>
