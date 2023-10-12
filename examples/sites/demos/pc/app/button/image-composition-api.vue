<template>
  <tiny-button>
    <img :src="image" width="26" />
    <span>图片按钮</span>
  </tiny-button>
</template>

<script setup>
import { Button as TinyButton } from '@opentiny/vue'

const image = `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/button-image.png`
</script>
