<template>
  <tiny-nav-bar title="标题" sub-title="副标题" left-arrow right-text="确认">
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
