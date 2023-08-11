<template>
  <tiny-breadcrumb>
    <tiny-breadcrumb-item v-for="route in routes" :key="route.path" :to="route.path">{{
      route.meta.title
    }}</tiny-breadcrumb-item>
  </tiny-breadcrumb>
</template>

<script setup lang="jsx">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Breadcrumb as TinyBreadcrumb, BreadcrumbItem as TinyBreadcrumbItem } from '@opentiny/vue'

const route = useRoute()
const routes = computed(() => {
  return route.matched
})
</script>
