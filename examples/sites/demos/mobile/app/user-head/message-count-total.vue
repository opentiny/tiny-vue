<template>
  <tiny-user-head :message-total="100" type="icon"></tiny-user-head>
</template>

<script lang="jsx">
import { UserHead } from '@opentiny/vue'

export default {
  components: {
    TinyUserHead: UserHead
  }
}
</script>
