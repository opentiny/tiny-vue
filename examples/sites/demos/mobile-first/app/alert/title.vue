<template>
  <div>
    <tiny-alert size="large" title="通过属性设置自定义 title"></tiny-alert>
    <br />
    <tiny-alert size="large">
      <template #title>通过 slot 设置自定义 title</template>
    </tiny-alert>
  </div>
</template>

<script>
import { Alert } from '@opentiny/vue'

export default {
  components: {
    TinyAlert: Alert
  }
}
</script>
