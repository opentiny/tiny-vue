<template>
  <tiny-user-head v-model="imgUrl" type="image"></tiny-user-head>
</template>

<script>
import { TinyUserHead } from '@opentiny/vue'

export default {
  components: {
    TinyUserHead
  },
  data() {
    return {
      imgUrl: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/ld.png`
    }
  }
}
</script>
