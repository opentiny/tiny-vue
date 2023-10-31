<template>
  <tiny-exception page-empty type="pageservererror"></tiny-exception>
</template>

<script>
import { Exception } from '@opentiny/vue'

export default {
  components: {
    TinyException: Exception
  }
}
</script>
