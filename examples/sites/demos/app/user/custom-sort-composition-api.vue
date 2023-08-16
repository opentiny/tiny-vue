<template>
  <tiny-user v-model="user" :sortable="Sortable" multiple></tiny-user>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { User as TinyUser } from '@opentiny/vue'
import Sortable from 'sortablejs'

const user = ref('441047913162396,702973890055088,421000103624183')
</script>
