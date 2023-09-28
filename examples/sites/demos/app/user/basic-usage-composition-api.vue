<template>
  <tiny-user v-model="user"></tiny-user>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { User as TinyUser } from '@opentiny/vue'

const user = ref('702973890055088')
</script>
