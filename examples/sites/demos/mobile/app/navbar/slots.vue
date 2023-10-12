<template>
  <tiny-nav-bar>
    自定义标题
    <template #left>
      <icon-arrow-left></icon-arrow-left>
    </template>
    <template #right>
      <icon-more></icon-more>
    </template>
  </tiny-nav-bar>
</template>

<script lang="jsx">
import { NavBar } from '@opentiny/vue'
import { iconArrowLeft, iconMore } from '@opentiny/vue-icon'

export default {
  components: {
    TinyNavBar: NavBar,
    IconArrowLeft: iconArrowLeft(),
    IconMore: iconMore()
  },
  data() {
    return {}
  }
}
</script>
