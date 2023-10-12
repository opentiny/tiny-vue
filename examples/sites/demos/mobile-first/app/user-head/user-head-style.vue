<template>
  <div style="display: flex; justify-content: space-around; width: 300px">
    <tiny-user-head type="icon"></tiny-user-head>
    <tiny-user-head type="icon" round></tiny-user-head>
  </div>
</template>

<script>
import { UserHead } from '@opentiny/vue'

export default {
  components: {
    TinyUserHead: UserHead
  }
}
</script>
