<template>
  <tiny-user-head
    :message-total="100"
    message-type="basic"
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
