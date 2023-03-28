<template>
  <div>
    <tiny-link :underline="false">默认链接</tiny-link>
    <tiny-link :underline="false" type="primary">主要链接</tiny-link>
    <tiny-link :underline="false" type="success">成功链接</tiny-link>
    <tiny-link :underline="false" type="warning">警告链接</tiny-link>
    <tiny-link :underline="false" type="danger">危险链接</tiny-link>
    <tiny-link :underline="false" type="info">信息链接</tiny-link>
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
