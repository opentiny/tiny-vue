<template>
  <tiny-hrapprover
    v-model="value"
    :approval-person="person"
    @update:approval-person="person = $event"
  ></tiny-hrapprover>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Hrapprover as TinyHrapprover } from '@opentiny/vue'

const value = ref('022471')
const person = ref('wangxiaofeng 00193664')
</script>
