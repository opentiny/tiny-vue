<template>
  <div class="basic-container">
    <div v-for="fit in fits" :key="fit">
      <div class="title">{{ fit }}</div>
      <tiny-image style="" :src="url" :fit="fit"></tiny-image>
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
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`
    }
  }
}
</script>

<style scoped>
.basic-container {
  display: flex;
  flex-wrap: wrap;
}

.title {
  margin: 16px 16px 8px 0;
}
.tiny-image {
  width: 100px;
  height: 100px;
  margin-right: 16px;
}
</style>
