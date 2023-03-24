<template>
  <tiny-breadcrumb>
    <tiny-breadcrumb-item v-for="route in routes" :key="route.path" :to="route.path">{{ route.meta.title }}</tiny-breadcrumb-item>
  </tiny-breadcrumb>
</template>

<script lang="jsx">
import { Breadcrumb, BreadcrumbItem } from '@opentiny/vue'

export default {
  components: {
    TinyBreadcrumb: Breadcrumb,
    TinyBreadcrumbItem: BreadcrumbItem
  },
  computed: {
    routes() {
      return this.$route.matched
    }
  }
}
</script>
