<template>
  <tiny-tag-group :data="data"></tiny-tag-group>
</template>

<script>
import { TinyTagGroup } from '@opentiny/vue'

export default {
  components: {
    TinyTagGroup
  },
  data() {
    return {
      data: [
        {
          name: '标签一'
        },
        {
          name: '标签二',
          type: 'info'
        },
        {
          name: '标签三',
          type: 'success'
        },
        {
          name: '标签四',
          type: 'warning'
        },
        {
          name: '标签五',
          type: 'danger'
        }
      ]
    }
  }
}
</script>
