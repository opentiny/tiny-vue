<template>
  <tiny-exception type="pageservererror" sub-message="自定义副文本内容"></tiny-exception>
</template>

<script>
import { Exception } from '@opentiny/vue'

export default {
  components: {
    TinyException: Exception
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
