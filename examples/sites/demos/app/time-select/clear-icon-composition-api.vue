<template>
  <tiny-time-select
    v-model="value"
    popper-class="myselect"
    placeholder="选择时间"
    :clear-icon="IconYes"
    clearable
    name="name"
  ></tiny-time-select>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TimeSelect as TinyTimeSelect } from '@opentiny/vue'
import { iconYes } from '@opentiny/vue-icon'

const IconYes = iconYes()
const value = ref('')
</script>
