<template>
  <tiny-nav-bar title="导航栏" left-text="返回" right-text="确定"> </tiny-nav-bar>
</template>

<script lang="jsx">
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
