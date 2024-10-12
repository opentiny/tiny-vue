<template>
  <div class="sticky-wrap">
    <div class="sticky-container">
      <tiny-sticky :z-index="999999" target=".sticky-container" :offset="80">
        <tiny-button type="primary">目标容器</tiny-button>
      </tiny-sticky>
    </div>
  </div>
</template>

<script>
import { Sticky, Button } from '@opentiny/vue'

export default {
  components: {
    TinySticky: Sticky,
    TinyButton: Button
  }
}
</script>

<style scoped>
.sticky-wrap {
  height: 1600px;
}

.sticky-container {
  text-align: center;
  height: 500px;
  border-radius: 4px;
  background: #e6f1fd;
}
</style>
