<template>
  <div class="tiny-mobile-exception-demo">
    <tiny-exception type="nodata" message="自定义文本内容" :imageUrl="imageUrl" @btn-click="test"></tiny-exception>
  </div>
</template>

<script lang="jsx">
import { Exception } from '@opentiny/vue'

export default {
  components: {
    TinyException: Exception
  },
  data() {
    return {
      imageUrl: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/planet1.jpg`
    }
  },
  methods: {
    test() {
      alert(11)
    }
  }
}
</script>
