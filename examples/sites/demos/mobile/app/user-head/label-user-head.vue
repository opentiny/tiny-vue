<template>
  <tiny-user-head class="head-item" type="label" round v-model="text"></tiny-user-head>
</template>

<script lang="jsx">
import { TinyUserHead } from '@opentiny/vue-mobile'

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
