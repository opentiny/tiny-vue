<template>
  <div>
    <tiny-button>默认按钮</tiny-button>
    <tiny-button>
      <span>上传</span>
      <tiny-icon-upload class="tiny-svg-size" />
    </tiny-button>
    <tiny-button>
      <img :src="image" width="26" />
      <span>图片按钮</span>
    </tiny-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Button as TinyButton } from '@opentiny/vue'
import { iconUpload } from '@opentiny/vue-icon'

const image = ref(`${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/button-image.png`)
const TinyIconUpload = iconUpload()
</script>
