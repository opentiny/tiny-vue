<template>
  <component :is="componentDocs" />
</template>

<script setup>
import Saas from './saas.vue'
import Mobile from './mobile.vue'
import Pc from './pc.vue'

let componentDocs
const mode = import.meta.env.VITE_APP_MODE
const theme = import.meta.env.VITE_TINY_THEME
if (mode === 'mobile') {
  componentDocs = Mobile
} else if (mode === 'pc' && theme === 'saas') {
  componentDocs = Saas
} else {
  componentDocs = Pc
}
</script>
