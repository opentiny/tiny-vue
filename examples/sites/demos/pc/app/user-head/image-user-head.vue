<template>
  <tiny-user-head v-model="imgUrl" type="image"></tiny-user-head>
</template>

<script>
import { UserHead } from '@opentiny/vue'

export default {
  components: {
    TinyUserHead: UserHead
  },
  data() {
    return {
      imgUrl: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/ld.png`
    }
  }
}
</script>
