<template>
  <div>
    <tiny-link :underline="false">无下划线</tiny-link>
    <tiny-link>有下划线</tiny-link>
  </div>
</template>

<script lang="jsx">
import { Link } from '@opentiny/vue'

export default {
  components: {
    TinyLink: Link
  }
}
</script>
