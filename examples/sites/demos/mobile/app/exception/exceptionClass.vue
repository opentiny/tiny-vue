<template>
  <div class="tiny-mobile-exception-demo">
    <tiny-exception
      type="nodata"
      button-text="重试"
      :imageUrl="imageUrl"
      :exception-class="exceptionClass"
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
    return {
      imageUrl: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/planet1.jpg`,
      exceptionClass: 'no-problem'
    }
  },
  methods: {}
}
</script>

<style lang="less">
.no-problem {
  background-color: pink;
}
</style>
