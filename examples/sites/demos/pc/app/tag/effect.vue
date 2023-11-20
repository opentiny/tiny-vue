<template>
  <div class="tiny-tag-demo">
    <span>Light：</span>
    <tiny-tag v-for="item in items" :key="'tiny-tag1-' + item.label" :type="item.type" effect="light">
      {{ item.label }}
    </tiny-tag>
    <br />
    <span>Dark：</span>
    <tiny-tag v-for="item in items" :key="'tiny-tag2-' + item.label" :type="item.type" effect="dark">
      {{ item.label }}
    </tiny-tag>
    <br />
    <span>Plain：</span>
    <tiny-tag v-for="item in items" :key="'tiny-tag3-' + item.label" :type="item.type" effect="plain">
      {{ item.label }}
    </tiny-tag>
  </div>
</template>

<script lang="jsx">
import { Tag } from '@opentiny/vue'

export default {
  components: {
    TinyTag: Tag
  },
  data() {
    return {
      items: [
        { type: '', label: '标签一' },
        { type: 'success', label: '标签二' },
        { type: 'info', label: '标签三' },
        { type: 'danger', label: '标签四' },
        { type: 'warning', label: '标签五' }
      ]
    }
  }
}
</script>
