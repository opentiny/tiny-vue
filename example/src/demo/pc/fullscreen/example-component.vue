<template>
  <div class="tiny-fullscreen-demo">
    <label class="checkbox">
      <input v-model="tinyPageOnly" type="checkbox" name="button" /> Tiny
      pageOnly
    </label>
    <label class="checkbox">
      <input v-model="tinyTeleport" type="checkbox" name="button" /> Tiny
      teleport
    </label>
    <tiny-fullscreen
      :teleport="tinyTeleport"
      :page-only="tinyPageOnly"
      :z-index="888"
      :fullscreen="tinyFullscreen"
      @update:fullscreen="tinyFullscreen = $event"
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
          {{ tinyFullscreen ? 'Exit Fullscreen' : 'Request Fullscreen' }}
        </button>
        <img v-show="!tinyFullscreen" src="static/images/8.jpg" />
        <img v-show="tinyFullscreen" src="static/images/9.jpg" />
      </div>
    </tiny-fullscreen>
  </div>
</template>

<script>
import { Fullscreen } from '@opentiny/vue'

export default {
  name: 'ComponentExample',
  components: {
    TinyFullscreen: Fullscreen
  },
  data() {
    return {
      tinyFullscreen: false,
      tinyTeleport: true,
      tinyPageOnly: false
    }
  },
  methods: {
    toggle() {
      this.tinyFullscreen = !this.tinyFullscreen
    }
  }
}
</script>
