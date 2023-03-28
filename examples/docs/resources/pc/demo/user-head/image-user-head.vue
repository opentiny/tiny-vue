<template>
  <tiny-user-head type="image" :value="imgUrl"></tiny-user-head>
</template>

<script lang="jsx">
import { UserHead } from '@opentiny/vue'

export default {
  components: {
    TinyUserHead: UserHead
  },
  data() {
    return {
      imgUrl: 'localhost:3000/webnova/static/img/compontent.b2f0f5b.png'
    }
  }
}
</script>
