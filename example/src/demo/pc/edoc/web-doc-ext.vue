<template>
  <tiny-edoc :web-doc-ext="['doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'pdf']"></tiny-edoc>
</template>

<script>
import { Edoc } from '@opentiny/vue'

export default {
  components: {
    TinyEdoc: Edoc
  }
}
</script>
