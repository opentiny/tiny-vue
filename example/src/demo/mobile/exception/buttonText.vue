<template>
  <div class="tiny-mobile-exception-demo">
    <tiny-exception type="nodata" button-text="自定义按钮文本"></tiny-exception>
  </div>
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
  methods: {
    test() {
      alert(11)
    }
  }
}
</script>
