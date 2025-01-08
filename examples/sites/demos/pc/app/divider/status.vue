<template>
  <div>
    <tiny-divider> default </tiny-divider>
    <tiny-divider status="success"> success </tiny-divider>
    <tiny-divider status="error"> error </tiny-divider>
    <tiny-divider status="warning"> warning </tiny-divider>
    <tiny-divider status="info"> info </tiny-divider>
  </div>
</template>

<script>
import { Divider } from '@opentiny/vue'

export default {
  components: {
    TinyDivider: Divider
  }
}
</script>
