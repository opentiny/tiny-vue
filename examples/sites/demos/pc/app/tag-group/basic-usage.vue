<template>
  <tiny-tag-group :data="data"></tiny-tag-group>
</template>

<script>
import { TagGroup } from '@opentiny/vue'

export default {
  components: {
    TinyTagGroup: TagGroup
  },
  data() {
    return {
      data: [
        { type: 'info', name: '标签' },
        { type: 'success', name: '标签' },
        { type: 'warning', name: '标签' },
        { type: 'danger', name: '标签' },
        { name: '标签' }
      ]
    }
  }
}
</script>
