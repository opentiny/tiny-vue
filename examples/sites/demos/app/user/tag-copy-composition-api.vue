<template>
  <div>
    <tiny-user v-model="user" multiple value-field="userAccount" tag-selectable></tiny-user>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { User as TinyUser } from '@opentiny/vue'

const user = ref('test1,test2,test3')
</script>
