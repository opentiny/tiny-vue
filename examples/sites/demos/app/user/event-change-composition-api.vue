<template>
  <tiny-user v-model="user" multiple @change="change"></tiny-user>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { User as TinyUser, Modal } from '@opentiny/vue'

const user = ref('441047913162396,702973890055088,421000103624183')

function change(val) {
  Modal.message({ message: `${val}`, status: 'info' })
}
</script>
