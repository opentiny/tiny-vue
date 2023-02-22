<template>
  <tiny-edoc :web-doc-preview="webDocPreview" doc-format="pdf" :can-be-del="true"></tiny-edoc>
</template>

<script>
import { Edoc } from '@opentiny/vue'

export default {
  components: {
    TinyEdoc: Edoc
  },
  data() {
    return {
      webDocPreview: {
        docId: 'xxxxxxx',
        docVersion: '1.0',
        target: '#webDocIframe01',
        type: 'image',
        viewThumb: true,
        height: 500,
        width: 500
      }
    }
  }
}
</script>
