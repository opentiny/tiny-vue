<template>
  <div>
    <tiny-numeric v-model="stepNum" size="medium"></tiny-numeric>
    <br /><br />
    <tiny-numeric v-model="stepNum" size="small"></tiny-numeric>
    <br /><br />
    <tiny-numeric v-model="stepNum" size="mini"></tiny-numeric>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Numeric as TinyNumeric } from '@opentiny/vue'

const stepNum = ref(1)
</script>
