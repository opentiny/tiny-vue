<template>
  <tiny-logout v-bind="service"></tiny-logout>
</template>

<script>
import { Logout } from '@opentiny/vue'

export default {
  components: {
    TinyLogout: Logout
  },
  data() {
    return {
      service: {
        getLogoutUrl: this.getlogout
      }
    }
  },
  methods: {
    getlogout() {
      return new Promise((resolve, reject) => {
        this.$service
          .fetchLogoutUrl()
          .then((url) => {
            resolve(url)
          })
          .catch(reject)
      })
    }
  }
}
</script>
