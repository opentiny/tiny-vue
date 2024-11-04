<template>
  <div class="demo-user-class">
    <tiny-user v-model="user" multiple text-field="userCN"></tiny-user>
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
      user: '441047913162396,702973890055088,421000103624183'
    }
  }
}
</script>

<style scoped>
.demo-user-class {
  width: 280px;
}
</style>
