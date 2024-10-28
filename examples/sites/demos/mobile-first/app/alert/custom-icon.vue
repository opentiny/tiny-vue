<template>
  <div>
    <tiny-alert :icon="IconBoat" description="自定义图标"></tiny-alert>
  </div>
</template>

<script>
import { TinyAlert } from '@opentiny/vue'
import { iconBoat } from '@opentiny/vue-icon'

export default {
  components: {
    TinyAlert
  },
  data() {
    return {
      IconBoat: iconBoat()
    }
  }
}
</script>
