<template>
  <tiny-user-head type="icon" :value="IconSmile"></tiny-user-head>
</template>

<script lang="jsx">
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
