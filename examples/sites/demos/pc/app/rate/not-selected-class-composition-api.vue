<template>
  <tiny-rate v-model="rate" :void-icon-class="iconclass2"></tiny-rate>
</template>

<script setup>
import { ref } from 'vue'
import { Rate as TinyRate } from '@opentiny/vue'

const rate = ref(2)
const iconclass2 = ref('icon-starDisable')
</script>
