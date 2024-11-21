<template>
  <div class="demo-user-class">
    <tiny-user v-model="user" multiple hover-expand></tiny-user>
  </div>
</template>

<script>
import { TinyUser } from '@opentiny/vue'

export default {
  components: {
    TinyUser
  },
  data() {
    return {
      user: '702973890055088,421000103624002,421000103624003'
    }
  }
}
</script>

<style scoped>
.demo-user-class {
  width: 280px;
}
</style>
