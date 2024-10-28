<template>
  <tiny-logout :redirect-url="url"></tiny-logout>
</template>

<script lang="jsx">
import { TinyLogout } from '@opentiny/vue'

export default {
  components: {
    TinyLogout
  },
  data() {
    return {
      url: '#/webnova/zh-CN/component/logout'
    }
  }
}
</script>
