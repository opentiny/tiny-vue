<template>
  <tiny-breadcrumb>
    <tiny-breadcrumb-item v-for="route in routes" :key="route.path" :to="route.path">{{
      route.meta.title
    }}</tiny-breadcrumb-item>
  </tiny-breadcrumb>
</template>

<script setup>
import { computed } from 'vue'
import { Breadcrumb as TinyBreadcrumb, BreadcrumbItem as TinyBreadcrumbItem } from '@opentiny/vue'

const routes = computed(() => {
  return []
})
</script>
