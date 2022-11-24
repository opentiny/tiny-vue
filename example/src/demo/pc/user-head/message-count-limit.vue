<template>
  <tiny-user-head
    :message-total="100"
    :message-upper-limit="99"
    type="icon"
  ></tiny-user-head>
</template>

<script>
import { UserHead } from '@opentiny/vue'

export default {
  components: {
    TinyUserHead: UserHead
  }
}
</script>
