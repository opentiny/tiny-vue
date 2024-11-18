<template>
  <tiny-user-head v-model="text" class="head-item" type="label" round></tiny-user-head>
</template>

<script>
import { TinyUserHead } from '@opentiny/vue'

export default {
  components: {
    TinyUserHead
  },
  data() {
    return {
      text: '文字'
    }
  }
}
</script>
