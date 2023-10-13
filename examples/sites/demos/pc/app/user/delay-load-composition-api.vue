<template>
  <tiny-user v-model="user" :delay="2000"></tiny-user>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { User as TinyUser } from '@opentiny/vue'

const user = ref('421000103624183')
</script>
