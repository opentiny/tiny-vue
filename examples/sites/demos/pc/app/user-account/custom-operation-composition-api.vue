<template>
  <tiny-user-account>
    <tiny-radio v-model="value" label="1">研发</tiny-radio>
    <tiny-radio v-model="value" label="2">非研发</tiny-radio>
  </tiny-user-account>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { UserAccount as TinyUserAccount, Radio as TinyRadio } from '@opentiny/vue'

const value = ref('1')
</script>
