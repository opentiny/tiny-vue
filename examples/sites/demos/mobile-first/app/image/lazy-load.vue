<template>
  <div class="block h-80 overflow-auto">
    <tiny-image v-for="url in srcList" :key="url" :src="url" lazy></tiny-image>
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
      srcList: [
        '/static/images/3.jpg',
        '/static/images/1.jpg',
        'https://his-beta.huawei.com/opentiny/webnova/static/img/featuremap.c5e796e.png'
      ]
    }
  }
}
</script>
