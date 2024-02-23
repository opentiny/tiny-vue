<template>
  <tiny-rate v-model="rate1" :icon-classes="iconclass1"></tiny-rate>
</template>

<script setup>
import { ref } from 'vue'
import { Rate as TinyRate } from '@opentiny/vue'

const rate1 = ref(3)
const iconclass1 = ref(['icon-frown', 'icon-meh', 'icon-smile'])
</script>
