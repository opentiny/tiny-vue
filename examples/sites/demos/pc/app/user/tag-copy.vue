<template>
  <div class="demo-user-class">
    <tiny-user v-model="user" multiple value-field="userAccount" tag-selectable></tiny-user>
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
      user: 'test1,test2,test3'
    }
  }
}
</script>

<style scoped>
.demo-user-class {
  width: 280px;
}
</style>
