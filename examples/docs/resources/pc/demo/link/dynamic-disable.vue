<template>
  <div>
    <tiny-link disabled>默认链接</tiny-link>
    <tiny-link type="primary" disabled>主要链接</tiny-link>
    <tiny-link type="success" disabled>成功链接</tiny-link>
    <tiny-link type="warning" disabled>警告链接</tiny-link>
    <tiny-link type="danger" disabled>危险链接</tiny-link>
    <tiny-link type="info" disabled>信息链接</tiny-link>
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
