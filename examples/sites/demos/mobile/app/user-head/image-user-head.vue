<template>
  <tiny-user-head type="image" :modelValue="imgUrl"></tiny-user-head>
</template>

<script lang="jsx">
import { TinyUserHead } from '@opentiny/vue-mobile'

export default {
  components: {
    TinyUserHead
  },
  data() {
    return {
      imgUrl: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/fruit.jpg`
    }
  }
}
</script>
