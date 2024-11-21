<template>
  <div class="mt-10">
    <tiny-slider v-model="value5">
      <template #left>
        <tiny-icon-frown></tiny-icon-frown>
      </template>
      <template #right>
        <tiny-icon-smile></tiny-icon-smile>
      </template>
    </tiny-slider>
  </div>
</template>

<script>
import { TinySlider } from '@opentiny/vue'
import { IconFrown, IconSmile } from '@opentiny/vue-icon'

export default {
  components: {
    TinySlider,
    TinyIconFrown: IconFrown(),
    TinyIconSmile: IconSmile()
  },
  data() {
    return {
      value5: 40
    }
  }
}
</script>
