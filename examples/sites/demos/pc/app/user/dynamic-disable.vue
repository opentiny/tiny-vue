<template>
  <div class="demo-user-class">
    <tiny-user v-model="user" disabled></tiny-user>
  </div>
</template>

<script lang="jsx">
import { TinyUser } from '@opentiny/vue'

export default {
  components: {
    TinyUser
  },
  data() {
    return {
      user: '421000103624183'
    }
  }
}
</script>

<style scoped>
.demo-user-class {
  width: 280px;
}
</style>
