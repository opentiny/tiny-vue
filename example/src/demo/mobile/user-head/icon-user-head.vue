<template>
  <tiny-user-head type="icon" :value="IconSmile"></tiny-user-head>
</template>

<script>
import { UserHead } from '@opentiny/vue'
import { iconSmile } from '@opentiny/vue-icon'

export default {
  components: {
    TinyUserHead: UserHead
  },
  data() {
    return {
      IconSmile: iconSmile()
    }
  }
}
</script>
