<template>
  <div>
    <tiny-numeric v-model="value" size="medium"></tiny-numeric>
    <br /><br />
    <tiny-numeric v-model="value" size="small"></tiny-numeric>
    <br /><br />
    <tiny-numeric v-model="value" size="mini"></tiny-numeric>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Numeric as TinyNumeric } from '@opentiny/vue'

const value = ref(1)
</script>
