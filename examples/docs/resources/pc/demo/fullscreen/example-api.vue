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
      <img v-show="!fullscreen" src="/static/images/book-small.jpg" />
      <img v-show="fullscreen" src="/static/images/book-big.jpg" />
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
      pageOnly: false
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
</style>
