<template>
  <div class="tiny-mobile-exception-demo">
    <tiny-exception
      type="nodata"
      button-text="重试"
      :imageUrl="imageUrl"
      message="网络异常，请稍后再试，或者联系管理员给您处理"
    ></tiny-exception>
  </div>
</template>

<script lang="jsx">
import { TinyException } from '@opentiny/vue-mobile'

export default {
  components: {
    TinyException
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
