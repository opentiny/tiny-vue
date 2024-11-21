<template>
  <div class="mt-10">
    <tiny-slider v-model="value5" :show-input="true">
      <template #default="slotScope">
        <b>{{ slotScope.slotScope }}%</b>
      </template>
    </tiny-slider>
  </div>
</template>

<script>
import { TinySlider } from '@opentiny/vue'

export default {
  components: {
    TinySlider
  },
  data() {
    return {
      value5: 40
    }
  }
}
</script>
