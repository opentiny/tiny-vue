<template>
  <tiny-logout :redirect-url="url"></tiny-logout>
</template>

<script lang="jsx">
import { Logout } from '@opentiny/vue'

export default {
  components: {
    TinyLogout: Logout
  },
  data() {
    return {
      url: '#/webnova/zh-CN/component/logout'
    }
  }
}
</script>
