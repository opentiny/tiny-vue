<template>
  <div class="demo-user-class">
    <tiny-user v-model="user" multiple hide-selected></tiny-user>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyUser } from '@opentiny/vue'

const user = ref('702973890055088')
</script>

<style scoped>
.demo-user-class {
  width: 280px;
}
</style>
