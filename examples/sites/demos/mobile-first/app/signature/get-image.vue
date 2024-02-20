<template>
  <div>
    <div class="h-72">
      <tiny-signature ref="signature" :show-submit-button="false"></tiny-signature>
    </div>
    <div class="mt-5">
      <tiny-button @click="getImage">生成图片</tiny-button>
    </div>
    <tiny-image :src="url"></tiny-image>
  </div>
</template>

<script>
import { Signature, Image, Button } from '@opentiny/vue'

export default {
  components: {
    TinySignature: Signature,
    TinyImage: Image,
    TinyButton: Button
  },
  data() {
    return {
      url: ''
    }
  },
  methods: {
    getImage() {
      const { image } = this.$refs.signature.getSignatureImage()
      this.url = image
    }
  }
}
</script>
