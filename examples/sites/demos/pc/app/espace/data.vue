<template>
  <tiny-espace :data="op"></tiny-espace>
</template>

<script lang="jsx">
import { Espace } from '@opentiny/vue'

export default {
  components: {
    TinyEspace: Espace
  },
  data() {
    return {
      op: [
        {
          type: 'im',
          value: 'a12345678',
          icon: 'icon-message-circle'
        },
        {
          type: 'im',
          value: 'b12345678',
          icon: 'icon-message-circle'
        },
        {
          type: 'im',
          value: 'c12345678',
          icon: 'icon-message-circle'
        },
        {
          type: 'sip',
          value: 'd12345678',
          icon: 'icon-telephone-circle'
        },
        {
          type: 'mailto',
          value: 'test1@test.com',
          icon: 'icon-email-circle'
        }
      ]
    }
  }
}
</script>
