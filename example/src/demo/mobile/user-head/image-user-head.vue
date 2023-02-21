<template>
  <tiny-user-head type="image" :modelValue="imgUrl"></tiny-user-head>
</template>

<script>
import { UserHead } from '@opentiny/vue'

export default {
  components: {
    TinyUserHead: UserHead
  },
  data() {
    return {
      imgUrl: 'static/images/fruit.jpg'
    }
  }
}
</script>
