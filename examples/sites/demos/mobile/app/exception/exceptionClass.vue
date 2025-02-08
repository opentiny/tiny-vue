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

<script setup lang="jsx">
import { ref } from 'vue'
import { Exception } from '@opentiny/vue'

const imageUrl = ref(`${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/planet1.jpg`)
const exceptionClass = ref('no-problem')
const TinyException = Exception
</script>

<style lang="less">
.no-problem {
  background-color: pink;
}
</style>
