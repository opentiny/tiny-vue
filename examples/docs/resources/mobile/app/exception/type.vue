<template>
  <div class="tiny-mobile-exception-demo">
    <tiny-exception
      type="nodata"
      button-text="重试"
      imageUrl="/static/images/planet1.jpg"
      message="网络异常，请稍后再试，或者联系管理员给您处理"
    ></tiny-exception>
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
