<template>
  <tiny-user v-model="user" multiple hide-selected></tiny-user>
</template>

<script setup>
import { ref } from 'vue'
import { User as TinyUser } from '@opentiny/vue'

const user = ref('702973890055088')
</script>
