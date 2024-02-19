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

<script lang="jsx">
import { Fullscreen } from '@opentiny/vue'

export default {
  name: 'ComponentExample',
  components: {
    TinyFullscreen: Fullscreen
  },
  data() {
    return {
      teleport: true,
      fullscreen: false,
      pageOnly: false,
      smallImg: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/book-small.jpg`,
      bigImg: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/book-big.jpg`
    }
  },
  methods: {
    toggle() {
      this.fullscreen = !this.fullscreen
    }
  }
}
</script>

<style scoped>
img {
  width: 100%;
}
</style>
