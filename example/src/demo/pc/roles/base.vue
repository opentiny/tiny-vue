<template>
  <tiny-roles @change="change"></tiny-roles>
</template>

<script>
import { Roles, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyRoles: Roles
  },
  data() {
    return {}
  },
  methods: {
    change(userId) {
      Modal.message({ message: `${userId}`, status: 'info' })
    }
  }
}
</script>
