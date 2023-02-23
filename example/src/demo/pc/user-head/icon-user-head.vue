<template>
  <tiny-user-head type="icon" v-model="IconSmile"></tiny-user-head>
</template>

<script>
import { UserHead } from '@opentiny/vue'
import { IconSmile } from '@opentiny/vue-icon'

export default {
  components: {
    TinyUserHead: UserHead
  },
  data() {
    return {
      IconSmile: IconSmile()
    }
  }
}
</script>
