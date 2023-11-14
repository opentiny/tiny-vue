<template>
  <div>
    <tiny-button>默认按钮</tiny-button>
    <tiny-button>
      <span>上传</span>
      <icon-upload class="tiny-svg-size" />
    </tiny-button>
    <tiny-button>
      <img :src="image" width="26" />
      <span>图片按钮</span>
    </tiny-button>
  </div>
</template>

<script>
import { Button } from '@opentiny/vue'
import { IconUpload } from '@opentiny/vue-icon'

export default {
  components: {
    IconUpload: IconUpload(),
    TinyButton: Button
  },
  data() {
    return {
      image: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/button-image.png`
    }
  }
}
</script>
