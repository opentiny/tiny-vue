<template>
  <div>
    <tiny-tag v-for="item in items" :key="'tiny-tag3-' + item.label" selectable>
      {{ item.label }}
    </tiny-tag>
  </div>
</template>

<script>
import { Tag } from '@opentiny/vue'

export default {
  components: {
    TinyTag: Tag
  },
  data() {
    return {
      items: [
        { label: '标签一' },
        { label: '标签二' },
        { label: '标签三' },
        { label: '标签四' },
        { label: '标签五' },
        { label: '标签六' }
      ]
    }
  }
}
</script>
