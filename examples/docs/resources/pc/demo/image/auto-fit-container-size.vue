<template>
  <div>
    <div style="float: left; width: 20%" v-for="fit in fits" :key="fit">
      <div>{{ fit }}</div>
      <tiny-image style="width: 100px; height: 100px" :src="url" :fit="fit"></tiny-image>
    </div>
  </div>
</template>

<script lang="jsx">
import { Image } from '@opentiny/vue'

export default {
  components: {
    TinyImage: Image
  },
  data() {
    return {
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      url: 'static/images/mountain.png'
    }
  }
}
</script>
