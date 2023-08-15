<template>
  <tiny-image style="width: 100px; height: 100px" :src="url"></tiny-image>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Image as TinyImage } from '@opentiny/vue'

const url = ref(`${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`)
</script>
