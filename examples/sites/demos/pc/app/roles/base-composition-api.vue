<template>
  <tiny-roles @change="change" :popper-append-to-body="false"></tiny-roles>
</template>

<script setup>
import { TinyRoles, TinyModal } from '@opentiny/vue'

function change(userId) {
  TinyModal.message({ message: `${userId}`, status: 'info' })
}
</script>
