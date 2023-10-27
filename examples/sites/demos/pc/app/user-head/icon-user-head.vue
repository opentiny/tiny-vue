<template>
  <tiny-user-head v-model="tinyIconSmile" type="icon"></tiny-user-head>
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
      tinyIconSmile: iconSmile()
    }
  }
}
</script>
