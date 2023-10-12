<template>
  <div class="tiny-fullscreen-demo">
    <label class="checkbox">
      <input v-model="pageOnly" type="checkbox" name="button" />
      pageOnly
    </label>
    <label class="checkbox">
      <input v-model="teleport" type="checkbox" name="button" />
      teleport
    </label>
    <tiny-fullscreen
      :teleport="teleport"
      :page-only="pageOnly"
      :z-index="999"
      :fullscreen="fullscreen"
      @update:fullscreen="fullscreen = $event"
    >
      <div
        class="tiny-fullscreen-wrapper"
        style="
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #333;
        "
      >
        <button type="button" @click="toggle">
          {{ fullscreen ? 'Exit Fullscreen' : 'Request Fullscreen' }}
        </button>
        <img v-show="!fullscreen" :src="smallImg" />
        <img v-show="fullscreen" :src="bigImg" />
      </div>
    </tiny-fullscreen>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Fullscreen as TinyFullscreen } from '@opentiny/vue'

const teleport = ref(true)
const fullscreen = ref(false)
const pageOnly = ref(false)
const smallImg = ref(`${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/book-small.jpg`)
const bigImg = ref(`${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/book-big.jpg`)

function toggle() {
  fullscreen.value = !fullscreen.value
}
</script>

<style scoped>
img {
  width: 100%;
}
</style>
