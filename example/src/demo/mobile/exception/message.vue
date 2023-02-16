<template>
  <div class="tiny-mobile-exception-demo">
    <tiny-exception
      type="nodata"
      message="自定义文本内容"
      @click="test"
    ></tiny-exception>
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
