<template>
  <tiny-slider v-model="value" :show-input="true">
    <template #default="slotScope">
      <b>{{ slotScope.slotScope }}%</b>
    </template>
  </tiny-slider>
</template>

<script>
import { TinySlider } from '@opentiny/vue'

export default {
  components: {
    TinySlider
  },
  data() {
    return {
      value: 40
    }
  }
}
</script>

<style scoped>
.tiny-slider-container {
  margin-top: 50px;
}
</style>
