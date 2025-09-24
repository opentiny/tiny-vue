<template>
  <div class="exception-demo">
    <tiny-exception type="nodata"></tiny-exception>
  </div>
</template>

<script>
import { TinyException } from '@opentiny/vue'

export default {
  components: {
    TinyException
  }
}
</script>

<style scoped>
.exception-demo {
  padding: 20px;
}
</style>
