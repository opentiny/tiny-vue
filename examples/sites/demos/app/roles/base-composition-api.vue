<template>
  <tiny-roles @change="change"></tiny-roles>
</template>

<script setup lang="jsx">
import { Roles as TinyRoles, Modal } from '@opentiny/vue'

function change(userId) {
  Modal.message({ message: `${userId}`, status: 'info' })
}
</script>
