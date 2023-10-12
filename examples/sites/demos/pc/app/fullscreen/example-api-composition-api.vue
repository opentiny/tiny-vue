<template>
  <div class="tiny-fullscreen-demo">
    <label class="checkbox"> <input v-model="pageOnly" type="checkbox" name="button" /> pageOnly </label>
    <label class="checkbox"> <input v-model="teleport" type="checkbox" name="button" /> teleport </label>
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
  </div>
</template>

<script setup lang="jsx">
import { ref, getCurrentInstance } from 'vue'
import { Fullscreen } from '@opentiny/vue'

const fullscreen = ref(false)
const teleport = ref(true)
const pageOnly = ref(false)
const instance = getCurrentInstance()
const smallImg = ref(`${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/book-small.jpg`)
const bigImg = ref(`${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/book-big.jpg`)

async function toggle() {
  await Fullscreen.toggle(instance.vnode.el.querySelector('.tiny-fullscreen-wrapper'), {
    teleport: teleport.value,
    pageOnly: pageOnly.value,
    zIndex: 999,
    callback: (isFullscreen) => {
      fullscreen.value = isFullscreen
    }
  })

  fullscreen.value = Fullscreen.isFullscreen
}
</script>

<style scoped>
img {
  width: 100%;
}
</style>
