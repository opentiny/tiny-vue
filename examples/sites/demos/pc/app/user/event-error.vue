<template>
  <div class="demo-user-class">
    <tiny-user v-model="user" multiple @error="queryError"></tiny-user>
  </div>
</template>

<script lang="jsx">
import { TinyUser, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyUser
  },
  data() {
    return {
      user: ''
    }
  },
  methods: {
    queryError(error) {
      TinyModal.message({
        message: `查询失败:[${error.join(',')}]`,
        status: 'error'
      })
    }
  }
}
</script>

<style scoped>
.demo-user-class {
  width: 280px;
}
</style>
