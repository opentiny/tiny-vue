<template>
  <div class="flex">
    <div class="px-5">
      <p>默认</p>
      <tiny-image :src="url" :image-size="600"></tiny-image>
    </div>
    <div class="px-5">
      <p>自定义</p>
      <tiny-image :src="url" :image-size="600">
        <template #placeholder>
          <div class="image-slot">加载中<span>...</span></div>
        </template>
      </tiny-image>
    </div>
  </div>
</template>

<script>
import { Image } from '@opentiny/vue'

export default {
  components: {
    TinyImage: Image
  },
  data() {
    return {
      url: '/static/images/9.jpg'
    }
  }
}
</script>
