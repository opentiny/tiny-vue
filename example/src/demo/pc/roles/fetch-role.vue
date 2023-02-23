<template>
  <tiny-roles :fetch-role="fetchRole"></tiny-roles>
</template>

<script>
import { Roles } from '@opentiny/vue'

export default {
  components: {
    TinyRoles: Roles
  },
  data() {
    return {
      fetchRole: this.handleFetchRole
    }
  },
  methods: {
    handleFetchRole() {
      return Promise.resolve(window.location.href)
    }
  }
}
</script>
