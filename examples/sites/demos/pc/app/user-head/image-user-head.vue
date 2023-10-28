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
      imgUrl: '/static/images/ld.png'
    }
  }
}
</script>
