<template>
  <tiny-roles @change="change" :popper-append-to-body="false"></tiny-roles>
</template>

<script>
import { TinyRoles, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyRoles
  },
  data() {
    return {}
  },
  methods: {
    change(userId) {
      TinyModal.message({ message: `${userId}`, status: 'info' })
    }
  }
}
</script>
