<template>
  <div>
    <tiny-user-head
      class="head-item"
      type="label"
      value="Ai"
      background-color="#40a9ff"
      color="#fa8c16"
    ></tiny-user-head>
    <tiny-user-head
      class="head-item"
      type="icon"
      :background-color="'rgb(250, 140, 22)'"
      color="rgb(64, 169, 255)"
    ></tiny-user-head>
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
