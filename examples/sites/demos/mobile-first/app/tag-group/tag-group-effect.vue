<template>
  <div>
    <span class="label">深色标签 </span>
    <tiny-tag-group :data="items" effect="dark"> </tiny-tag-group>
    <br />
    <span class="label">浅色标签 </span>
    <tiny-tag-group :data="items" effect="light"> </tiny-tag-group>
    <br />
    <span class="label">朴素标签 </span>
    <tiny-tag-group :data="items" effect="plain"> </tiny-tag-group>
  </div>
</template>

<script>
import { TagGroup } from '@opentiny/vue'

export default {
  components: {
    TinyTagGroup: TagGroup
  },
  data() {
    return {
      // success / warning / alerting / error / info / default
      items: [
        { type: 'success', name: '标签一' },
        { type: 'success', name: '标签二' },
        { type: 'success', name: '标签三' },
        { type: 'success', name: '标签四' },
        { type: 'success', name: '标签五' },
        { type: 'success', name: '标签六' }
      ]
    }
  }
}
</script>
