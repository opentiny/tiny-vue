<template>
  <div>
    <tiny-time-select v-model="value" :suffix-icon="IconYes" placeholder="选择时间范围"></tiny-time-select>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TimeSelect as TinyTimeSelect } from '@opentiny/vue'
import { iconYes } from '@opentiny/vue-icon'

const IconYes = iconYes()
const value = ref('08:30')
</script>
