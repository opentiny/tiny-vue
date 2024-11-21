<template>
  <div class="demo-user-class">
    <tiny-user v-model="user" :delay="2000"></tiny-user>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyUser } from '@opentiny/vue'

const user = ref('421000103624183')
</script>

<style scoped>
.demo-user-class {
  width: 280px;
}
</style>
