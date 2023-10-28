<template>
  <tiny-link :underline="false">默认链接</tiny-link>
</template>

<script lang="jsx">
import { Link } from '@opentiny/vue'

export default {
  components: {
    TinyLink: Link
  }
}
</script>
