<template>
  <div>
    <div class="h-72">
      <tiny-signature @submit="submit"></tiny-signature>
    </div>
    <h4 class="mt-5 text-base font-bold">点击确认按钮生成预览图片：</h4>
    <tiny-image :src="url"></tiny-image>
  </div>
</template>

<script>
import { Signature, Image } from '@opentiny/vue'

export default {
  components: {
    TinySignature: Signature,
    TinyImage: Image
  },
  data() {
    return {
      url: ''
    }
  },
  methods: {
    submit({ image }) {
      this.url = image
    }
  }
}
</script>
