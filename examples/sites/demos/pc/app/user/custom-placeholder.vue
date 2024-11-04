<template>
  <div class="demo-user-class">
    <tiny-user v-model="user" placeholder="请输入工号"></tiny-user>
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
      user: '441047913162396'
    }
  }
}
</script>

<style scoped>
.demo-user-class {
  width: 280px;
}
</style>
