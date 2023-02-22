<template>
  <tiny-user-head class="head-item" type="label" round v-model="text"></tiny-user-head>
</template>

<script>
import { UserHead } from '@opentiny/vue'

export default {
  components: {
    TinyUserHead: UserHead
  },
  data() {
    return {
      text: '文字'
    }
  }
}
</script>
