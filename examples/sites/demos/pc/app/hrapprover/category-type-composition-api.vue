<template>
  <tiny-hrapprover
    v-model="value"
    :approval-person="person"
    @update:approvalPerson="person = $event"
    category="0506"
  ></tiny-hrapprover>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Hrapprover as TinyHrapprover } from '@opentiny/vue'

const value = ref('022471')
const person = ref('wangxiaofeng 00193664')
</script>
