<template>
  <div class="tiny-mobile-exception-demo">
    <tiny-exception type="nodata" message="自定义文本内容" imageUrl="/static/images/planet1.jpg" @btn-click="test"></tiny-exception>
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
  methods: {
    test() {
      alert(11)
    }
  }
}
</script>
