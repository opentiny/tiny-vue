<template>
  <div class="tiny-mobile-exception-demo">
    <tiny-exception type="busy" sub-message="自定义副文本内容"></tiny-exception>
  </div>
</template>

<script lang="jsx">
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
