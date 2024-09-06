<template>
  <div class="basic-container">
    <div v-for="fit in fits" :key="fit">
      <div class="title">{{ fit }}</div>
      <tiny-image style="" :src="url" :fit="fit"></tiny-image>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Image as TinyImage } from '@opentiny/vue'

const fits = ref(['fill', 'contain', 'cover', 'none', 'scale-down'])
const url = ref(`https://res.hc-cdn.com/tiny-vue-web-doc/3.18.9.20240902190525/static/images/mountain.png`)
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
