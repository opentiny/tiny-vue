<template>
  <tiny-link :underline="false" href="https://opentiny.design/tiny-vue" target="_blank">默认链接</tiny-link>
</template>

<script>
import { Link } from '@opentiny/vue'

export default {
  components: {
    TinyLink: Link
  }
}
</script>
