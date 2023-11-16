<template>
  <div>
    <tiny-alert :icon="TinyIconBoat" description="自定义图标"></tiny-alert>
    <tiny-alert description="默认图标"></tiny-alert>
    <tiny-alert type="success" description="type 为 success 的默认图标"></tiny-alert>
    <tiny-alert type="warning" description="type 为 warning 的默认图标"></tiny-alert>
    <tiny-alert type="error" description="type 为 error 的默认图标"></tiny-alert>
  </div>
</template>

<script>
import { Alert } from '@opentiny/vue'
import { iconBoat } from '@opentiny/vue-icon'

export default {
  components: {
    TinyAlert: Alert
  },
  data() {
    return {
      TinyIconBoat: iconBoat()
    }
  }
}
</script>
