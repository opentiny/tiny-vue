<template>
  <tiny-user v-model="user" placeholder="请输入工号"></tiny-user>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { User as TinyUser } from '@opentiny/vue'

const user = ref('441047913162396')
</script>
