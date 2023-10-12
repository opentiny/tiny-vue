<template>
  <div>
    <div style="float: left; width: 20%" v-for="fit in fits" :key="fit">
      <div>{{ fit }}</div>
      <tiny-image style="width: 100px; height: 100px" :src="url" :fit="fit"></tiny-image>
    </div>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Image as TinyImage } from '@opentiny/vue'

const fits = ref(['fill', 'contain', 'cover', 'none', 'scale-down'])
const url = ref(`${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`)
</script>
