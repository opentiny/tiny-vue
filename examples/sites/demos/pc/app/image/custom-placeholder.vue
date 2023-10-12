<template>
  <div style="display: flex">
    <div style="padding: 0 20px">
      <p>默认</p>
      <tiny-image :src="url"></tiny-image>
    </div>
    <div style="padding: 0 20px">
      <p>自定义</p>
      <tiny-image :src="url">
        <template #placeholder>
          <div class="image-slot">加载中<span class="dot">...</span></div>
        </template>
      </tiny-image>
    </div>
  </div>
</template>

<script lang="jsx">
import { Image } from '@opentiny/vue'

export default {
  components: {
    TinyImage: Image
  },
  data() {
    return {
      url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/fruit.jpg`
    }
  }
}
</script>
