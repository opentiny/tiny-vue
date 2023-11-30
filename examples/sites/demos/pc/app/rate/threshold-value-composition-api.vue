<template>
  <tiny-rate
    v-model="rate1"
    :low-threshold="1"
    :high-threshold="4"
    show-text
    :colors="['#FADB14', '#ff7a45', '#ffa940']"
  ></tiny-rate>
</template>

<script setup>
import { ref } from 'vue'
import { Rate as TinyRate } from '@opentiny/vue'

const rate1 = ref(3)
</script>
