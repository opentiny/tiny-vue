<template>
  <tiny-user-head v-model="text" class="head-item" type="label" round></tiny-user-head>
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
