<template>
  <tiny-link :underline="false" href="localhost:3000/#/zh-CN/index" target="_blank">默认链接</tiny-link>
</template>

<script lang="jsx">
import { Link } from '@opentiny/vue'

export default {
  components: {
    TinyLink: Link
  }
}
</script>
