<template>
  <tiny-user-head type="image" :value="imgUrl"></tiny-user-head>
</template>

<script>
import { UserHead } from '@opentiny/vue'

export default {
  components: {
    TinyUserHead: UserHead
  },
  data() {
    return {
      imgUrl: 'static/images/ld.png'
    }
  }
}
</script>
