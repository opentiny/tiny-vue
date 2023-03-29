<template>
  <tiny-user v-model="user" multiple @error="queryError"></tiny-user>
</template>

<script lang="jsx">
import { User, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyUser: User
  },
  data() {
    return {
      user: ''
    }
  },
  methods: {
    queryError(error) {
      Modal.message({
        message: `查询失败:[${error.join(',')}]`,
        status: 'error'
      })
    }
  }
}
</script>
