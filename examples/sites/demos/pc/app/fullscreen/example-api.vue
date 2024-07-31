<template>
  <div class="tiny-fullscreen-demo">
    <div class="demo-fullscreen">
      <label class="checkbox"> <input v-model="pageOnly" type="checkbox" name="button" /> pageOnly </label>
      <label class="checkbox"> <input v-model="teleport" type="checkbox" name="button" /> teleport </label>
    </div>
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

<script lang="jsx">
import { Fullscreen } from '@opentiny/vue'

export default {
  name: 'ApiExample',
  data() {
    return {
      fullscreen: false,
      teleport: true,
      pageOnly: false,
      smallImg: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/book-small.jpg`,
      bigImg: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/book-big.jpg`
    }
  },
  methods: {
    async toggle() {
      await Fullscreen.toggle(this.$el.querySelector('.tiny-fullscreen-wrapper'), {
        teleport: this.teleport,
        pageOnly: this.pageOnly,
        zIndex: 999,
        callback: (isFullscreen) => {
          this.fullscreen = isFullscreen
        }
      })

      this.fullscreen = Fullscreen.isFullscreen
    }
  }
}
</script>

<style scoped>
img {
  width: 100%;
}
.demo-fullscreen {
  margin-bottom: 8px;
}
</style>
