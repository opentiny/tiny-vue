<template>
  <tiny-user v-model="user" multiple hide-selected></tiny-user>
</template>

<script>
import { TinyUser } from '@opentiny/vue'

export default {
  components: {
    TinyUser
  },
  data() {
    return {
      user: '702973890055088'
    }
  }
}
</script>
