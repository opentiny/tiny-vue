<template>
  <tiny-roles @change="change" :popper-append-to-body="false"></tiny-roles>
</template>

<script setup>
import { Roles as TinyRoles, Modal } from '@opentiny/vue'

function change(userId) {
  Modal.message({ message: `${userId}`, status: 'info' })
}
</script>
