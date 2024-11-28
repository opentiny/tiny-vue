<template>
  <tiny-user-head type="icon" :value="IconSmile"></tiny-user-head>
</template>

<script lang="jsx">
import { TinyUserHead } from '@opentiny/vue-mobile'
import { iconSmile } from '@opentiny/vue-icon'

export default {
  components: {
    TinyUserHead
  },
  data() {
    return {
      IconSmile: iconSmile()
    }
  }
}
</script>
