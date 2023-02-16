<template>
  <tiny-floatbar class="custom">
    <ul>
      <li><a>Default-A</a></li>
      <li><a>B</a></li>
      <li><a>C</a></li>
      <li><a>D</a></li>
    </ul>
  </tiny-floatbar>
</template>

<script>
import { Floatbar } from '@opentiny/vue'

export default {
  components: {
    TinyFloatbar: Floatbar
  }
}
</script>

<style scoped>
.custom {
  position: static;
  width: 200px;
  background-color: burlywood;
}
</style>
