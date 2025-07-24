<template>
  <tiny-checkbox-group v-model="checked">
    <tiny-checkbox-button label="复选框 1"></tiny-checkbox-button>
    <tiny-checkbox-button label="复选框 2"></tiny-checkbox-button>
  </tiny-checkbox-group>
</template>

<script setup>
import { ref } from 'vue'
import { TinyCheckboxButton, TinyCheckboxGroup } from '@opentiny/vue'

const checked = ref(['复选框 1'])
</script>
