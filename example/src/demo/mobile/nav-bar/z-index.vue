<template>
  <tiny-nav-bar
    title="导航栏"
    z-index="10"
    :fixed="false"
    left-arrow
    right-arrow
  >
  </tiny-nav-bar>
</template>

<script>
import { NavBar } from '@opentiny/vue'

export default {
  components: {
    TinyNavBar: NavBar
  },
  data() {
    return {}
  }
}
</script>
