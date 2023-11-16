<template>
  <tiny-rate v-model="rate" disabled :disabled-void-icon-class="readiconclass1"></tiny-rate>
</template>

<script setup>
import { ref } from 'vue'
import { Rate as TinyRate } from '@opentiny/vue'

const rate = ref(3)
const readiconclass1 = ref('icon-starDisable')
</script>
