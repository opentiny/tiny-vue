<template>
  <tiny-edoc doc-format="pdf" :not-submit-data="['canBeDel', 'canBeEdit']"></tiny-edoc>
</template>

<script>
import { Edoc } from '@opentiny/vue'

export default {
  components: {
    TinyEdoc: Edoc
  }
}
</script>
