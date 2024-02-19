<template>
  <tiny-exception type="pageservererror"></tiny-exception>
</template>

<script>
import { Exception } from '@opentiny/vue'

export default {
  components: {
    TinyException: Exception
  }
}
</script>
