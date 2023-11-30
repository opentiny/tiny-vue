<template>
  <div>
    <tiny-user v-model="user" multiple disabled :show-tips="false"></tiny-user>
    {{ user }}
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { User as TinyUser } from '@opentiny/vue'

const user = ref('702973890055088,421000103624002,421000103624003')
</script>
