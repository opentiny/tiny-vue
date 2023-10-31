<template>
  <div class="flex justify-center items-center text-xs">
    <div class="w-80 py-8 text-center inline-block">
      <div class="mb-5">默认</div>
      <tiny-image :src="url" :image-size="200"></tiny-image>
    </div>
    <div class="w-80 py-8 text-center inline-block">
      <div class="mb-5">自定义</div>
      <tiny-image :src="url" :image-size="200">
        <template #error>
          <div class="h-full flex items-center justify-center">自定义加载失败内容</div>
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
      url: ''
    }
  }
}
</script>
