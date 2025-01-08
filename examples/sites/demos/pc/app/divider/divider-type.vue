<template>
  <div>
    <tiny-divider>solid线</tiny-divider>
    <tiny-divider border-style="dashed">dashed线</tiny-divider>
    <tiny-divider border-style="dotted">dotted线</tiny-divider>
  </div>
</template>

<script>
import { TinyDivider } from '@opentiny/vue'

export default {
  components: {
    TinyDivider
  }
}
</script>
