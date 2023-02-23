<template>
  <tiny-edoc file-whitelist=".docx,.txt"></tiny-edoc>
</template>

<script>
import { Edoc } from '@opentiny/vue'

export default {
  components: {
    TinyEdoc: Edoc
  }
}
</script>
