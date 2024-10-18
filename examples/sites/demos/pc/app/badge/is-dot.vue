<template>
  <tiny-badge is-dot>小圆点显示</tiny-badge>
  <br /><br />
  <tiny-badge is-dot>
    <template #default>
      <tiny-button type="text" :icon="TinyIconMail"> </tiny-button>
    </template>
  </tiny-badge>
</template>

<script>
import { Badge } from '@opentiny/vue'
import { Button } from '@opentiny/vue'
import { iconMail } from '@opentiny/vue-icon'

export default {
  components: {
    TinyButton: Button,
    TinyBadge: Badge
  },
  data() {
    return {
      TinyIconMail: iconMail()
    }
  }
}
</script>
