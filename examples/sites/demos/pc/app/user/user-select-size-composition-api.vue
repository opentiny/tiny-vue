<template>
  <div>
    <p>尺寸：medium</p>
    <tiny-user v-model="user" size="medium"></tiny-user>
    <p>尺寸：small</p>
    <tiny-user v-model="user" size="small"></tiny-user>
    <p>尺寸：mini</p>
    <tiny-user v-model="user" size="mini"></tiny-user>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { User as TinyUser } from '@opentiny/vue'

const user = ref('421000103624183')
</script>
